'use strict';

module.exports.TreeNode = class TreeNode {
  constructor(value,left=null,right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
};

module.exports.BinaryTree = class BinaryTree {
  constructor(root=null){
    this.root = root;
  }

  // single traversal method required for checking path

  inOrderTraversal(){
    if(!this.root)
      return null;
    return this._inOrderTraversal(this.root, []);
  }

  _inOrderTraversal(root, resultArr){
    // this is a base case
    if(root === null)
      return null;

    let result = resultArr;
    // visit left
    let leftresult = this._inOrderTraversal(root.left, result);
    // console.log('LEFT RESULT:', leftresult);
    if (leftresult !== null) {
      result.push('left'); // push root current node being inspected to the path list if not null
    }
    // push root current node being inspected to the path list
    result.push('root');
    // visit right
    let rightresult = this._inOrderTraversal(root.right, result);
    // console.log('RIGHT RESULT:', rightresult);
    if (rightresult !== null) {
      result.push('right'); // push root current node being inspected to the path list if not null
    }

    return result;
  }
};