import * as core from '@actions/core';
import { partition } from 'lodash';

import { addComment } from './comments';
import { Context } from './context';
import { addLabelByName, removeLabelByName } from './labels';
import { hasLabel, isPullRequestDirty, tryGetPullRequests } from './prs';

(async () => {
  try {
    const pullRequests = await tryGetPullRequests();

    const [dirtyPullRequests, cleanPullRequests] = partition(
      pullRequests,
      isPullRequestDirty,
    );

    await Promise.all(
      dirtyPullRequests
        .filter((pr) => !hasLabel(pr, Context.dirtyLabel))
        .map(async (pr) => {
          await addLabelByName(pr, Context.dirtyLabel);
          await addComment(pr);
        }),
    );

    await Promise.all(
      cleanPullRequests
        .filter((pr) => hasLabel(pr, Context.dirtyLabel))
        .map(async (pr) => {
          await removeLabelByName(pr, Context.dirtyLabel);
        }),
    );
  } catch (error) {
    core.setFailed(String(error));
  }
})();
