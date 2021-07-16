import * as core from '@actions/core';
import * as github from '@actions/github';

export const Context = {
  token: process.env.GITHUB_TOKEN,
  repo: github.context.repo,
  attempts: Number(core.getInput('attempts')),
  sleepMs: Number(core.getInput('sleepMs')),
  dirtyLabel: core.getInput('dirtyLabel', { required: true }),
};
