'use strict';

module.exports.TreeNode = class TreeNode {
  constructor(value,left=null,right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
};

module.exports.BST = class BST {
  constructor(root=null){
    this.root = root;
  }

  insert(nodeToInsert){
    if(this.root === null)
      this.root = nodeToInsert;
    else
      this._insert(this.root,nodeToInsert);
  }

  _insert(root,nodeToInsert){
    if(nodeToInsert.value < root.value){
      // going left
      if(!root.left)
        root.left = nodeToInsert;
      else
        this._insert(root.left,nodeToInsert);
    } else {
      // going right
      if(!root.right)
        root.right = nodeToInsert;
      else
        this._insert(root.right,nodeToInsert);
    }
  }

  find(value){
    return this._find(this.root,value);
  }

  _find(root,value){
    if(!root)
      return null;
    else if(root.value === value)
      return root;
    else if(root.value < value)
      return this._find(root.right,value);
    else
      return this._find(root.left,value);
  }

  isBalanced() {
    return this._isBalanced(this.root);
  }

  _isBalanced(root) {
    let lh; /* for height of left subtree */
    let rh; /* for height of right subtree */

    /* If tree is empty then return true */
    if (root == null)
      return true;

    /* Get the height of left and right sub trees */
    lh = this._height(root.left);
    rh = this._height(root.right);

    if (Math.abs(lh - rh) <= 1
              && this._isBalanced(root.left)
              && this._isBalanced(root.right)) 
      return true;

    /* If we reach here then tree is not height-balanced */
    return false;
    
  }

  _height(node) {
    /* base case tree is empty */
    if (node == null)
      return 0;

    /* If tree is not empty then height = 1 + max of left
       height and right heights */
    return 1 + Math.max(this._height(node.left), this._height(node.right));
  }

  // helper method that calls the 
  // removeNode with a given value
  remove(value)
  {
    // root is re-initialized with
    // root of a modified tree.
    this.root = this._removeNode(this.root, value);
  }
 
  // Method to remove node with a 
  // given value
  // it recurrs over the tree to find the
  // value and removes it
  _removeNode(node, key)
  {
         
    // if the root is null then tree is 
    // empty
    if(node === null)
      return null;
 
    // if value to be delete is less than 
    // roots value then move to left subtree
    else if(key < node.value)
    {
      node.left = this._removeNode(node.left, key);
      return node;
    }
 
    // if value to be delete is greater than 
    // roots value then move to right subtree
    else if(key > node.value)
    {
      node.right = this._removeNode(node.right, key);
      return node;
    }
 
    // if value is similar to the root's value 
    // then delete this node
    else
    {
      // deleting node with no children
      if(node.left === null && node.right === null)
      {
        node = null;
        return node;
      }
 
      // deleting node with one children
      if(node.left === null)
      {
        node = node.right;
        return node;
      }
         
      else if(node.right === null)
      {
        node = node.left;
        return node;
      }
 
      // Deleting node with two children
      // minumum node of the right subtree
      // is stored in aux
      let aux = this._findMinNode(node.right);
      node.value = aux.value;
 
      node.right = this._removeNode(node.right, aux.value);
      return node;
    }
 
  }

  //  finds the minimum node in tree
  // searching starts from given node
  _findMinNode(node)
  {
    // if left of a node is null
    // then it must be minimum node
    if(node.left === null)
      return node;
    else
      return this._findMinNode(node.left);
  }

};