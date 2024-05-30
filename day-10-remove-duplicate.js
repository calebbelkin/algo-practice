// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.



var removeDuplicates = function(nums) {
    let i = nums.length - 1;
  
    while (i > 0) {
     if (nums[i] == nums[i - 1]) {
             nums.splice(i, 1);
         }
         i--;
    }
    return nums.length;
 };

//  other 2 pointer solution 

//  var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0;

//     let k = 1;  // k is the index for the next unique element

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// };