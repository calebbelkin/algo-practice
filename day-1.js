// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

root = [3,9,20,null,null,15,7]

var maxDepth = function(root) {
    if (root == null) {
        return 0; // If the node is null, return depth as 0
    }
    // Recursive call to the right and left children, adding 1 to include the current node's depth
    let rCount = maxDepth(root.right) + 1; 
    console.log(rCount)
    let lCount = maxDepth(root.left) + 1;
    return Math.max(rCount, lCount)
};