// Given the root of a binary tree, invert the tree, and return its root.

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let ph;
    let count = 0; 
    if (root == undefined) return root
    // if (root.left) {
    //     placeHolder = root.left 
    //     console.log('left', root.val)
    //     invertTree(root.left) 
    //     }
    // if (root.right) {
    //     root.left = root.right;
    //     root.right = placeHolder;
    //     console.log('right', root.val)
    //     invertTree(root.right)

    // }
    // return root
    

    // check if left exists 
    if (root.left) {
        ph = root.left;
        root.left = root.right;
        root.right = ph;
        invertTree(root.left)
    }


    if (root.right) {
        // root.right = root.left
    }
    return root
};
// real answer :  let ph;
    if (root == undefined) return root
    ph = root.left;
    root.left = root.right;
    root.right = ph;
    invertTree(root.left)
    invertTree(root.right)

return root
