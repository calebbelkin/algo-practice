// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

const isAnagram = (s, t) =>  {
    if (s.length !== t.length) return false
    const sortedS = s.split("").sort().join("");
    console.log(sortedS)
    const sortedT = t.split("").sort().join("");
    console.log(sortedT)
    if (sortedS == sortedT) return true
    else return false
}