// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// first approach 

// var lengthOfLongestSubstring = function(s) {
//     if (s == '') return 0
//     if (s.length == 1) return 1
//     const sArr = []
//     let cache = {}
//     let longestWord = ''
//     //loop through the string 
//     for (let i = 0; i < s.length; i++) {
//     // when you hit a repeatign letter save eevything beofre it as a new longest string varaible
//         if (cache[s[i]]) {
//             // console.log('entering')
//             sArr.push(longestWord)
//             longestWord = ''
//             cache = {}
//         }
//         longestWord += s[i];
//         // console.log(longestWord)
//         cache[s[i]] = 1;
//         // console.log(cache)
//     }

//     // console.log(longestWord.length, 'hello')
//     //keep that varible and start the count again 
//     // when you reach a repaecting char
//     // compare that substrign with the prev
//     // return length of the longest substring
//     if (sArr.length >= 1) return Math.max(...sArr.map(str => str.length));
//     return longestWord.length

// }


//sliding window 

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();
    for (let right = 0; right < s.length; right++) {
        while(charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right])
          maxLength = Math.max(maxLength, ((right - left) +1))
    }


    return maxLength
};

