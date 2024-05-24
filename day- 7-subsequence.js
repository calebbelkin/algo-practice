
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).




var isSubsequence = function(s, t) {
    // two pointers 
    let p1 = 0
    let p2 = 0
    let count = 0
    // itterate through t 
    for ( let i = 0; i < t.length; i++) {
        if (s[p1] == t[p2]) {
            // if(count - 1 == s.length) return true
            p1++;
            p2++;
            // count++
        }
        else {
            p2++
        }
    }
    if (p1 < s.length) return false
    else return true
};