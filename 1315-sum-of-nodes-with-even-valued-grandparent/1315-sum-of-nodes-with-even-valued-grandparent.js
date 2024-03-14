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
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    return dfs(root, 1,1);
};

const dfs = (current,parent,grandParent) => {
    if(!current) return 0;
    
    return (grandParent % 2 === 0 ? current.val: 0) + 
        dfs(current.left, current.val, parent) + 
        dfs(current.right, current.val, parent);
}
