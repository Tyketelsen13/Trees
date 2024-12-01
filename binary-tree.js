/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    function minDepthHelp (node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDepthHelp(node.right); + 1;
      if (node.right === null) return minDepthHelp(node.left) + 1;
      return (Math.min(minDepthHelp(node.left), minDepthHelp(node.right)) + 1;
    );

  }
return minDepthHelp(this.root);}
  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    function maxDepthHelp(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthHelp(node.right) + 1;
      if (node.right === null) return maxDepthHelp(node.left) + 1;
      return (Math.max(maxDepthHelp(node.left), maxDepthHelp(node.right)) + 1);
  }
return maxDepthHelp(this.root); }
  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;
    function maxSumHelper(node) {
      if (node === null) return 0;
      let leftSum = maxSumHelper(node.left);
      let rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum, rightSum) + node.val;
  
  }
  maxSumHelper(this.root); 
  return result; }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let queue = [this.root];
    let closest = null;
    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shoudlReassignClosest = currentVal < closest || closest === null;
      if (higherThanLowerBound && shoudlReassignClosest) {
        closest = currentVal;
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
    }
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (node1 === this.root || node2 === this.root) return false;
    function findLevelAndParent(
      nodetofind,
      currentNode,
      level = 0,
      data = {level: 0, parent: null }
    ) {
      if (data.parent) return data;
      if (currentNode.left === nodeToFind || currentNode.right === nodeToFind) {
        data.level = level + 1;
        data.parent = currentNode;
      } 
      if (currentNode.left) {
        return findLevelAndParent(nodeToFind, currentNode.left, level + 1, data); }
        if (currentNode.right) {
        return findLevelAndParent(nodeToFind, currentNode.right, level + 1, data); }
        return data;
      }
      let nodeInfo = findLevelAndParent(node1, this.root);
      let nodeInfo2 = findLevelAndParent(node2, this.root);

      let sameLevel = node1Info && node2Info && node1Info.level === node2Info.level;
      let differentParents = node1Info && node2Info && node1Info.parent!== node2Info.parent;
      return sameLevel && differentParents; }


    }
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    const values = [];
    function traverse(node) {
      if (!node) {
      values.push(node.val);
      traverse(node.left);
      traverse(node.right); }
      else {
        values.push("#");
      }
  
  }
  traverse(tree.root);
  return values.join(" "); }
  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(string tree) {
 if (!stringTree) return null;
 const values =stringTree.split(" ");
 function buildTree() {
  if (values.length) {
const currentValue = values.shift();
    if (currentValue === "#") return null;
  let currentNode = new BinaryTreeNode(+currentValue);
  currentNode.left = buildTree();
  currentNode.right = buildTree();
  return currentNode; }
  }
  }
  const root = buildTree();
  return new BinaryTree(root); 
 }

  

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2, currentNode=this.root)  {
    if (currentNode === null) return null;
    if (currentNode === node1 || currentNode === node2) return currentNode;
    const left = this.lowestCommonAncestor(node1, node2, currentNode.left);
    const right = this.lowestCommonAncestor(node1, node2, currentNode.right);
    if (left !== null && right !== null) return currentNode;
    return left || right;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
