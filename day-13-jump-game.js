// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     if (nums.length == 1) return true
//     if (nums.includes(0)) return false
// for (let i = 1; i < nums.length; i++ ) {
// let len = nums.length
// if (len - i <= (nums[i] + 1)) {
//     return true
// }

// else return false
// }
// };

var canJump = function(nums) {
    let goal = nums.length - 1;

     for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i
        }
     }
        return goal === 0 
     }

     // simpler solution 