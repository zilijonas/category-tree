import React from "react";
import { TreeNode } from "./model";
import { InterativeTree } from "./IterativeTree";
import { RecursiveTree } from "./RecursiveTree";

const rootNode: TreeNode = {
  id: "0",
  label: "Parent A"
};

export function TreeView() {
  return (
    <div style={styles.container}>
      <h3 style={styles.subheading}>Recursive Tree</h3>
      <RecursiveTree initialTree={{ ...rootNode }} />
      <h3 style={styles.subheading}>Iterative Tree</h3>
      <InterativeTree initialTree={{ ...rootNode }} />
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    margin: "50px 0"
  },
  subheading: {
    margin: "30px 0 15px 20px"
  }
};
