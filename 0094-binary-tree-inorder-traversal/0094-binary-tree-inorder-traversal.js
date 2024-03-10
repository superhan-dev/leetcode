/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root === null) return [];
    if(root.length <= 1) return root;

    let temp = [];
    const traverse = (node) => {
        if(!node) return;

        traverse(node.left);
        temp.push(node.val);
        traverse(node.right);

    }
    traverse(root);
    
    return temp;
};

