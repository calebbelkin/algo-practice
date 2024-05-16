
// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.




var secondHighest = function(s) {
    let numsArray = [];
    let split = s.split('')
    let currMax = 0;
    let secMax;
    for (let i = 0; i < split.length; i++) {
        if (split[i] > currMax) currMax = split[i]
    }
    console.log(currMax)
    return currMax
    // numsArray.sort()
    // let max = Math.max(...numsArray)
    // let min = Math.min(...numsArray)
    // if (max == min) return -1

    // let max1 = numsArray[numsArray.length - 1];
    // let secondMax = -1;

    // for (let i = numsArray.length - 2; i >= 0; i--) {
    //     if (numsArray[i] !== max1) {
    //          secondMax = numsArray[i];
    //         break;

    //     }
    // }
    // return secondMax;
}