/* ########## BIG-O NOTATION ########## */


// Example function to keep adding until a target number is reached
// example option 1
// const addUpTo = (n) => {
//     let total = 0
//     for(let i = 1; i <=n; i++) {
//         total += i
//     }
//     return total
// }

// console.log(addUpTo(10)) // logs 55

// // example option 2
// const addUpTo2 = (n) => {
//     return n * (n + 1) / 2;
// }

// console.log(addUpTo2(10)) // logs 55

/*
    Which is Better?
        How is Better defined? Faster? Less memory-intesive? More Readable?

*/

//Faster - can be checked using timing functions

//timing function
const timing = (number) => {
    let t1 = performance.now()
    addUpTo(number)
    let t2 = performance.now()
    console.log(`Time elapsed: ${(t2-t1) / 1000} seconds`)
}


// example option 1 with timing
const addUpTo = (n) => {
    let total = 0
    for(let i = 1; i <=n; i++) {
        total += i
    }
    return total
}
console.log("Timing addUpTo") // about 2.5 seconds on firefox
timing(1000000000)



// example option 2 with timing
const addUpTo2 = (n) => {
    return n * (n + 1) / 2;
}

console.log("Timing addUpTo2") // less than a second on firefox

const timing2 = (number) => {
    let t1 = performance.now()
    addUpTo2(number)
    let t2 = performance.now()
    console.log(`Time elapsed: ${(t2-t1) / 1000} seconds`)
}
timing(1000000000)

/* Problem with time:
    1. Different computers will record different times
    2. The same computer can fluctuate depending on background processes.
    3. Very fast algos are hard to measure with high precision.
*/

/* Instead of counting Time, we can count Simple Operations.
    1. Number of Simple Operations will ALWAYS be the same regardless of machine/background processes.
*/

//This example has 3 operations. Mulitply, Add and Divide. Always 3 operations, regardless of the size of n. If n = 10 , n * 3 = 30 operations to complete this task
// const addUpTo2 = (n) => {
//     return n * (n + 1) / 2;
// }


// Operation count in this example scales with n. Depending on how operations are counted, based on notes below, If n = 10, this function would have 7 * 10 = 70 operations to complete compared to 30 in the other example
// exact number doesn't matter, what matters is how it scales as n grows.
const addUpTo = (n) => {
    // single assignment when the function runs.
    let total = 0
    // ++ is shorthand for i += 1. So 2 operations here as well per loop. Scales with n
    // i = 1 single assignment at the start of the loop
    // i <= n is a single operation per loop.
    for(let i = 1; i <= n; i++) {
        // addition here is only 1 operation/loop. If N is 5, it becomes 5 operations. N = 20, 20 operations, etc. The "=" is a second operation per loop. n additions + n assignments(=). The larger the number, the more operations.
        total += i
    }
    return total
}