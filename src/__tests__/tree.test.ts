import { TreeNode } from "../tree/model";
import { createNode } from "../tree/TreeNodeItem";
import { iterativeTree } from "../tree/IterativeTree";
import { recursiveTree } from "../tree/RecursiveTree";

test("creates node", () => {
  const rootNode: TreeNode = {
    id: "0",
    label: "Parent A"
  };
  const node = createNode(rootNode, "Child A");
  expect(node).toStrictEqual({
    id: `${rootNode.id}.${(rootNode.children || []).length}`,
    label: "Child A",
    parentId: rootNode.id
  });
});

describe("creates tree", () => {
  const rootNode: TreeNode = {
    id: "0",
    label: "Parent A",
    children: [
      {
        parentId: "0",
        id: "0.0",
        label: "Child A",
        children: [
          {
            parentId: "0.0",
            id: "0.0.0",
            label: "Child AA"
          }
        ]
      },
      {
        parentId: "0",
        id: "0.1",
        label: "Child B"
      }
    ]
  };

  test("iterative", () => {
    const tree = iterativeTree(rootNode, () => {});
    expect(tree.length).toEqual(4);
  });

  test("recursive", () => {
    const updateTree = jest.fn();
    const tree = recursiveTree(rootNode, updateTree);
    const parsedTree = JSON.parse(JSON.stringify(tree));
    expect(parsedTree.props.node.children.length).toEqual(2);
    expect(parsedTree.props.node.children[0].children.length).toEqual(1);
  });
});
