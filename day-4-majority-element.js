// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



var majorityElement = function(nums) {
    // create a map to store values
    const map = {};
    // loop through and add values if they arnt in map - or increase count of that by 1 
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++
        }
        else {
            map[nums[i]] = 1
        }
    }

    let max = Math.max(...Object.values(map))
    for (let key in map) {
        if(map[key] == max) return key
    }
};