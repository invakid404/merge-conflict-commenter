import { jsonToGraphQLQuery } from 'json-to-graphql-query';

import { Context } from './context';
import { Label, Labelable, Node, Repository } from './generated/graphql';
import { octokit } from './octokit';
import { notEmpty } from './utils';

export const getAllLabelsByName = async (
  labelName: string,
): Promise<Label[]> => {
  const request = {
    query: {
      repository: {
        __args: {
          owner: Context.repo.owner,
          name: Context.repo.repo,
        },
        labels: {
          __args: {
            first: 100,
            query: labelName,
          },
          nodes: {
            id: true,
            name: true,
          },
        },
      },
    },
  };

  const {
    repository: { labels },
  }: { repository: Repository } = await octokit(jsonToGraphQLQuery(request));

  return labels?.nodes?.filter(notEmpty) ?? [];
};

const cachedLabels: Record<string, Label | undefined> = {};

export const getLabelByName = async (
  labelName: string,
): Promise<Label | undefined> => {
  if (cachedLabels.hasOwnProperty(labelName)) {
    return cachedLabels[labelName];
  }

  const allLabels = await getAllLabelsByName(labelName);

  return (cachedLabels[labelName] = allLabels.find(
    ({ name }) => name === labelName,
  ));
};

export const addLabelByName = async (
  target: Node & Labelable,
  labelName: string,
): Promise<void> => {
  const label = await getLabelByName(labelName);
  if (!label) {
    return;
  }

  await addLabel(target, label);
};

export const addLabel = async (
  target: Node & Labelable,
  label: Label,
): Promise<void> => {
  await doLabelMutation(target, label, 'addLabelsToLabelable');
};

export const removeLabelByName = async (
  target: Node & Labelable,
  labelName: string,
): Promise<void> => {
  const label = await getLabelByName(labelName);
  if (!label) {
    return;
  }

  await removeLabel(target, label);
};

export const removeLabel = async (
  target: Node & Labelable,
  label: Label,
): Promise<void> => {
  await doLabelMutation(target, label, 'removeLabelsFromLabelable');
};

const doLabelMutation = async (
  target: Node & Labelable,
  label: Label,
  mutationType: string,
): Promise<void> => {
  const params = {
    __args: {
      input: {
        labelIds: [label.id],
        labelableId: target.id,
      },
    },
    clientMutationId: true,
  };

  const request = {
    mutation: Object.fromEntries([[mutationType, params]]),
  };

  await octokit(jsonToGraphQLQuery(request));
};
