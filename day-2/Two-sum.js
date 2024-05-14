// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

nums1 = [2,7,11,15]

target1 = 9

const twoSum = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let currentTarget = target - nums[i];
        if (map.hasOwnProperty(currentTarget))  {
            return [map[currentTarget], i]
        }
        else {
            map[nums[i]] = i
        }
    }
    return [];
}

console.log(twoSum(nums1, target1))