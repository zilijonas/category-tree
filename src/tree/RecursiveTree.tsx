import React, { useRef, useState } from "react";
import { TreeNode } from "./model";
import { TreeNodeItem } from "./TreeNodeItem";

interface Props {
  initialTree: TreeNode;
}

export function RecursiveTree({ initialTree }: Props) {
  const [categoryTree, setCategoryTree] = useState<TreeNode>(initialTree);
  const currentTree = useRef(categoryTree);

  const updateTree = () =>
    currentTree.current && setCategoryTree({ ...currentTree.current });

  return <div>{recursiveTree(currentTree.current, updateTree)}</div>;
}

export function recursiveTree(node: TreeNode, updateTree: () => void) {
  return (
    <TreeNodeItem node={node} key={node.id} updateTree={updateTree}>
      {(node.children || []).map(child => recursiveTree(child, updateTree))}
    </TreeNodeItem>
  );
}
