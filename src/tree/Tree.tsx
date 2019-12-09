import React, { useState, useRef } from "react";
import { TreeNode } from "./model";
import { TreeInput } from "./TreeInput";

const initialTreeData: TreeNode = {
  id: "0",
  label: "Parent A",
  children: [
    {
      id: "00",
      label: "Child A",
      parentId: "0"
    }
  ]
};

export function TreeView() {
  const [categoryTree, setCategoryTree] = useState<TreeNode>();
  const currentTree = useRef(categoryTree);

  const updateTree = () =>
    currentTree.current && setCategoryTree({ ...currentTree.current });

  if (!categoryTree) {
    return (
      <div style={styles.container}>
        <div style={styles.node}>
          <TreeInput
            onSubmit={val => {
              const root = { id: "0", label: val };
              currentTree.current = { ...root };
              updateTree();
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {recursiveTree(currentTree.current, 0, updateTree)}
    </div>
  );
}

function recursiveTree(
  node: TreeNode | undefined,
  level: number,
  updateTree: () => void
) {
  if (!node) {
    return;
  }

  return (
    <div style={styles.node} key={node.id}>
      <span>
        {"-".repeat(level + 1)} {node.label}
      </span>
      <TreeInput
        onSubmit={val => {
          node.children = [...(node.children || []), createNode(node, val)];
          updateTree();
        }}
      />
      {(node.children || []).map(child =>
        recursiveTree(child, level + 1, updateTree)
      )}
    </div>
  );
}

function createNode(node: TreeNode, label: string): TreeNode {
  return {
    id: `${node.id}${(node.children || []).length + 1}`,
    label,
    parentId: node.id
  };
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    margin: "50px 0"
  },
  node: {
    margin: "10px 15px"
  }
};
