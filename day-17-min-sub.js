// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


// first attemot - read question wrong
//  var minSubArrayLen = function(target, nums) {
//     let currSum = 0;
//     let minLength = 0;
//     let left = 0;
//     for (let right = 0; right < nums.length + 1; right++) {
//        if (currSum == target) {
//            console.log(currSum, 'line 15')
//            console.log(right, 'right', left, 'left')
//            if (minLength == 0) minLength = currSum
//            minLength = Math.min(minLength, (right - left))
//            deletedVal = nums.slice(left , (left + 1))
//            currSum = currSum - deletedVal
//            // console.log(currSum, 'line 19')
//            left++
//        }

//        if (currSum < target) {
//            currSum += nums[right]
//        }

//        if (currSum > target) {
//            let deletedVal = nums.slice(left , (left + 1))
//            // console.log(deletedVal)
//            currSum = currSum - deletedVal
//            console.log(currSum)
//            left++
//            console.log(minLength, 'mini')
//            // console.log(right, 'right', left, 'left')
//        }
//     }
//     if (minLength == 0) return 0
//     return minLength
// };

// 2nd try
// var minSubArrayLen = function(target, nums) {
//     let currSum = 0;
//     let minLength = Infinity;
//     let left = 0;
//     for (let right = 0; right < nums.length; right++) {
//        if (currSum < target) {
//            currSum += nums[right]
//        }

//        if (currSum >= target) {
//            minLength = Math.min(minLength, ((right - left) - 1))
//            currSum = currSum - nums[left]
//            left++

//        }
//     }
// return minLength === Infinity ? 0 : minLength;
// };


// 3rd try correct 

var minSubArrayLen = function(target, nums) {
    let currSum = 0;
    let minLength = Infinity;  // Use Infinity to represent the initial state of minLength
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];
        
        // Shrink the window from the left while the current sum is greater than or equal to the target
        while (currSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currSum -= nums[left];
            left++;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;  // If minLength was not updated, return 0
}