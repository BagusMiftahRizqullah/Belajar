const isPrime = num => {
    let nilai = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            nilai++
        }
    }
    
    if (nilai == 2) {
        console.log(`${num} IS A PRIME`)
    } else {
        console.log(`${num} IS NOT A PRIME`)
    }
}

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(isPrime(3), '2 IS A PRIME')
test(isPrime(283), '283 IS A PRIME')
test(isPrime(21), '21 IS NOT A PRIME')
test(isPrime(389), '389 IS A PRIME')
test(isPrime(973), '973 IS NOT A PRIME')

// Description
// Complete the function given to determine the number given via parameter is prime or not
// If the number is a prime return must be "{number}IS A PRIME"
// If the number is not a prime return must be "{number} IS NOT A PRIME"

// Hint
// num : The number to be determined as a prime number or not

// Examples:
// num = 2
// Return = "2 IS A PRIME"
// num= 993
// Return = "993 IS NOT A PRIME"