import * as github from '@actions/github';

export const Context = {
  token: process.env.GITHUB_TOKEN,
  repo: github.context.repo,
};
