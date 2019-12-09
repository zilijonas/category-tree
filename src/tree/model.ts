export interface TreeNode {
  id: string;
  label: string;
  parentId?: string;
  children?: TreeNode[];
}
