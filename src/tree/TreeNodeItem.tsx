import React, { ReactNode } from "react";
import { TreeInput } from "./TreeInput";
import { TreeNode } from "./model";

interface Props {
  node: TreeNode;
  updateTree: () => void;
  additionalSpacing?: boolean;
  children?: ReactNode;
}

export function TreeNodeItem({
  node,
  updateTree,
  additionalSpacing,
  children
}: Props) {
  const level = node.id.split(".").length;

  return (
    <div
      style={
        additionalSpacing
          ? { ...styles.node, marginLeft: 15 * level }
          : styles.node
      }
      key={node.id}
    >
      <span>
        {"-".repeat(level)} {node.label}
      </span>
      <TreeInput
        onSubmit={val => {
          node.children = [...(node.children || []), createNode(node, val)];
          updateTree();
        }}
      />
      {children}
    </div>
  );
}

export function createNode(parentNode: TreeNode, label: string): TreeNode {
  return {
    id: `${parentNode.id}.${(parentNode.children || []).length}`,
    label,
    parentId: parentNode.id
  };
}

const styles: { [key: string]: React.CSSProperties } = {
  node: {
    margin: "10px 15px"
  }
};
