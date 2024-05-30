// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.




var isHappy = function(n) {
    if (n == 1) return true 
    if (n == 2 || n == 3 ) return false
    if (n > 3 && n <= 9) n = n ** 2
    let split;
    let squareSum = 0;
    let string = JSON.stringify(n)
    if (string.length > 1) {
       split = string.split('')
    }
    for (let i = 0; i < split.length; i++) {
        squareSum += (split[i] ** 2)
    }
    if (squareSum == 1) return true
    return isHappy(squareSum)
}

// not correect 