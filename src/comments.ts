import { jsonToGraphQLQuery } from 'json-to-graphql-query';

import { Context } from './context';
import { Issue, PullRequest } from './generated/graphql';
import { octokit } from './octokit';

export const addComment = async (
  { id }: Issue | PullRequest,
  body: string = Context.message,
): Promise<void> => {
  const request = {
    mutation: {
      addComment: {
        __args: {
          input: {
            subjectId: id,
            body,
          },
        },
        clientMutationId: true,
      },
    },
  };

  await octokit(jsonToGraphQLQuery(request));
};
