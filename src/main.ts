import * as core from '@actions/core';

import { getPullRequests } from './prs';
import { notEmpty, sleep } from './utils';

async function run(): Promise<void> {
  try {
    for (let i = 0; i < 5; ++i) {
      const pullRequests = await getPullRequests();

      pullRequests.forEach(({ number, mergeable, labels }) => {
        const labelInfo = labels?.nodes
          ?.filter(notEmpty)
          .map(({ name }) => name)
          .join(' ');

        core.info(`${number} (${labelInfo}) -> ${mergeable}`);
      });

      await sleep(1000);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
