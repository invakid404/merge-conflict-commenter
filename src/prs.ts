import * as core from '@actions/core';
import { EnumType, jsonToGraphQLQuery } from 'json-to-graphql-query';

import { Context } from './context';
import {
  Maybe,
  PullRequest,
  PullRequestState,
  Repository,
} from './generated/graphql';
import { octokit } from './octokit';
import { notEmpty } from './utils';

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
          edges: {
            node: {
              id: true,
              number: true,
              mergeable: true,
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
        edges,
        pageInfo: { hasNextPage, endCursor },
      },
    },
  }: { repository: Repository } = await octokit(jsonToGraphQLQuery(request));

  core.info(JSON.stringify(edges, null, 2));

  const results =
    edges
      ?.filter(notEmpty)
      .map(({ node }) => node)
      .filter(notEmpty) ?? [];

  if (hasNextPage) {
    const recurse = await getPullRequests(endCursor);

    results.push(...recurse);
  }

  return results;
};
