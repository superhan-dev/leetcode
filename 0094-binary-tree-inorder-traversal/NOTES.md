# Why use an inner function for this problem?

To solve this problem, we use an inner function, because of using the temp array.
In the inner function, we access the temp array by scope rather than passing by a parameter,
therefore we should write the traverse function as an inner function.

# code

## submmited code

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (root === null) return [];
  if (root.length <= 1) return root;

  let temp = [];
  const traverse = (node) => {
    if (!node) return;

    traverse(node.left);
    temp.push(node.val);
    traverse(node.right);
  };
  traverse(root);

  return temp;
};
```

## alternative with function

```javascript
var inorderTraversal = function (root) {
  let temp = [];
  treverse(root, temp);
  return temp;
};

var treverse = (root, arr) => {
  if (!root) return;
  if (root.left) treverse(root.left, arr);
  arr.push(root.val);
  if (root.right) treverse(root.right, arr);
};
```

## alternative

## node

```javascript
/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
```
