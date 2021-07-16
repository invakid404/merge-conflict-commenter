import { EnumType, jsonToGraphQLQuery } from 'json-to-graphql-query';

import { Context } from './context';
import {
  Maybe,
  MergeableState,
  PullRequest,
  PullRequestState,
  Repository,
} from './generated/graphql';
import { octokit } from './octokit';
import { notEmpty, sleep } from './utils';

export const getPullRequests = async (
  cursor?: Maybe<string>,
): Promise<PullRequest[]> => {
  const request = {
    query: {
      repository: {
        __args: {
          owner: Context.repo.owner,
          name: Context.repo.repo,
        },
        pullRequests: {
          __args: {
            first: 100,
            states: new EnumType(PullRequestState.Open),
            ...(cursor && { after: cursor }),
          },
          nodes: {
            id: true,
            number: true,
            mergeable: true,
            labels: {
              __args: {
                first: 100,
              },
              nodes: {
                id: true,
                name: true,
              },
            },
          },
          pageInfo: {
            endCursor: true,
            hasNextPage: true,
          },
        },
      },
    },
  };

  const {
    repository: {
      pullRequests: {
        nodes,
        pageInfo: { hasNextPage, endCursor },
      },
    },
  }: { repository: Repository } = await octokit(jsonToGraphQLQuery(request));

  const results = nodes?.filter(notEmpty) ?? [];

  if (hasNextPage) {
    const recurse = await getPullRequests(endCursor);

    results.push(...recurse);
  }

  return results;
};

export const tryGetPullRequests = async (
  attempts: number = Context.attempts,
  sleepMs: number = Context.sleepMs,
): Promise<PullRequest[]> => {
  let pullRequests: PullRequest[] = [];
  for (let attempt = 1; attempt <= attempts; ++attempt) {
    pullRequests = await getPullRequests();
    const hasUnknowns = pullRequests.some((pr) => isPullRequestBad(pr));

    if (!hasUnknowns) {
      break;
    }

    await sleep(sleepMs);
  }

  return pullRequests.filter((pr) => !isPullRequestBad(pr));
};

const isPullRequestBad = ({ mergeable }: PullRequest): boolean =>
  mergeable === MergeableState.Unknown;
