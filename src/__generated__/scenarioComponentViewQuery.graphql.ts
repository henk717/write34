/**
 * @generated SignedSource<<05900aea646e980ada156101d52bb3a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Query } from 'relay-runtime';
export type scenarioComponentViewQuery$variables = {
  scenario: string;
};
export type scenarioComponentViewQuery$data = {
  readonly prompt: {
    readonly authorsNote: string | null | undefined;
    readonly dateCreated: string;
    readonly dateEdited: string | null | undefined;
    readonly description: string | null | undefined;
    readonly id: string;
    readonly memory: string | null | undefined;
    readonly nsfw: boolean;
    readonly publishDate: string | null | undefined;
    readonly tags: string;
    readonly title: string;
    readonly worldInfos: ReadonlyArray<{
      readonly entry: string;
      readonly id: string;
      readonly keys: string;
    }>;
  } | null | undefined;
};
export type scenarioComponentViewQuery = {
  response: scenarioComponentViewQuery$data;
  variables: scenarioComponentViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "scenario"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "scenario"
      }
    ],
    "concreteType": "Prompts",
    "kind": "LinkedField",
    "name": "prompt",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dateCreated",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "dateEdited",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "publishDate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nsfw",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tags",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "authorsNote",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "memory",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "WorldInfos",
        "kind": "LinkedField",
        "name": "worldInfos",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "entry",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "keys",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "scenarioComponentViewQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "scenarioComponentViewQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0287d96a6b378b6076059170506999e8",
    "id": null,
    "metadata": {},
    "name": "scenarioComponentViewQuery",
    "operationKind": "query",
    "text": "query scenarioComponentViewQuery(\n  $scenario: ID!\n) {\n  prompt(id: $scenario) {\n    id\n    title\n    description\n    dateCreated\n    dateEdited\n    publishDate\n    nsfw\n    tags\n    authorsNote\n    memory\n    worldInfos {\n      id\n      entry\n      keys\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e33a0919e182c91954cc47d65c061a15";

export default node;