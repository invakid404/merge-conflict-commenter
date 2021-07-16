import * as core from '@actions/core';

import { tryGetPullRequests } from './prs';
import { notEmpty } from './utils';

async function run(): Promise<void> {
  try {
    const pullRequests = await tryGetPullRequests();

    pullRequests.forEach(({ number, mergeable, labels }) => {
      const labelInfo = labels?.nodes
        ?.filter(notEmpty)
        .map(({ name }) => name)
        .join(' ');

      core.info(`${number} (${labelInfo}) -> ${mergeable}`);
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
