import * as core from '@actions/core';
import { partition } from 'lodash';

import { Context } from './context';
import { addLabelByName } from './labels';
import { hasLabel, isPullRequestDirty, tryGetPullRequests } from './prs';

async function run(): Promise<void> {
  try {
    const pullRequests = await tryGetPullRequests();

    const [dirtyPullRequests, _cleanPullRequests] = partition(
      pullRequests,
      isPullRequestDirty,
    );

    await Promise.all(
      dirtyPullRequests
        .filter((pr) => !hasLabel(pr, Context.dirtyLabel))
        .map(async (pr) => {
          await addLabelByName(pr, Context.dirtyLabel);
        }),
    );
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
