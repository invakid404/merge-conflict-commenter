import * as core from '@actions/core';

import { getPullRequests } from './prs';
import { sleep } from './utils';

async function run(): Promise<void> {
  try {
    for (let i = 0; i < 5; ++i) {
      const pullRequests = await getPullRequests();

      pullRequests.forEach(({ number, mergeable }) => {
        core.info(`${number} -> ${mergeable}`);
      });

      await sleep(1000);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
