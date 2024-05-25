// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

var hasPathSum = function(root, targetSum, currSum = 0) {
    // Check if the current node is null
    if (!root) {
        return false;
    }

    // Update the current sum by adding the value of the current node
    currSum += root.val;
    console.log(currSum)

    // Check if we are at a leaf node and if the current sum equals the target sum
    if (!root.left && !root.right) {
        return currSum === targetSum;
    }

    // Recursively check the left and right subtrees

      let leftSide = hasPathSum(root.left, targetSum, currSum);
    let rightSide = hasPathSum(root.right, targetSum, currSum);

    // Return true if any of the left or right subtrees have a path sum that matches the target sum
    return leftSide || rightSide;
};