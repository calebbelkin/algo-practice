// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// first attempt 

// var wordPattern = function(pattern, s) {
//     const map = {};
//     const spSet = new Set(pattern.split(''))
//     const splitSet = new Set(s.split(' '));
//     if (spSet.size !== splitSet.size) return false
//     else {
//         let split = s.split(' ')
//         for (let i = 0; i < split.length; i++) {
//             let curr = split[i]
//             let currP = pattern[i]
//             if (map[curr] && map[curr] !== currP) {
//                 console.log(map[curr])
//                 return false
//             }
//             // if (map[curr]) {
//             //     console.log('test')
//             // } 
//             else {
//                 map[curr] = currP
//             }
//         }
//         return true
//     }
// };

// second attempt

var wordPattern = function(pattern, s) {
    let sArr = s.split(' ')

    // if the pattern is lopsided return false
    if (pattern.length !== sArr.length) return false 

    let kMap = {};
    let vMap = {};

    for (let i = 0; i < pattern.length; i++) {
        const key = pattern[i];
        const value = sArr[i]

        if (key in kMap || value in vMap) {
            if (kMap[key] !== value) return false
            if (vMap[value] !== key) return false

        }  else {
            kMap[key] = value
            vMap[value] = key
        }
    }
    return true
};