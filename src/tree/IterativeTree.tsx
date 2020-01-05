import React, { useRef, useState } from "react";
import { TreeNode } from "./model";
import { TreeNodeItem } from "./TreeNodeItem";

interface Props {
  initialTree: TreeNode;
}

export function InterativeTree({ initialTree }: Props) {
  const [categoryTree, setCategoryTree] = useState<TreeNode>(initialTree);
  const currentTree = useRef(categoryTree);

  const updateTree = () =>
    currentTree.current && setCategoryTree({ ...currentTree.current });

  return <div>{iterativeTree(currentTree.current, updateTree)}</div>;
}

export function iterativeTree(rootNode: TreeNode, updateTree: () => void) {
  const queue: TreeNode[] = [rootNode];
  const tree: TreeNode[] = [];

  while (queue.length) {
    const node = queue.pop()!;
    const children = [...(node.children || [])];

    tree.push(node);

    children.reverse().forEach(child => {
      queue.push(child);
    });
  }

  return tree.map(n => (
    <TreeNodeItem
      node={n}
      key={n.id}
      updateTree={updateTree}
      additionalSpacing
    />
  ));
}
