/* ########## BIG-O NOTATION ########## */

/* GENERAL RULES:
    - Arithmetic operations are constant
    - Variable assignments are constant
    - Accessing elements in an array (by index) or object (by key) is constant
    - In a loop, complexity is the length of the loop times the complexity of the whatever happens inside the loop. (i.e nested loops)



    1. Constants don't matter. 
        * O(2n) - gets simplified down to O(n)
        * O(500) - gets simplified down to O(1)
        * O(13n^2) - gets simplified down to O(n^2)
            
            A. Smaller terms don't matter
                * O(n + 10) - gets simplified down to O(n)
                * O(1000n + 50) - gets simplified down to O(n)
                * O(n^2 + 5n + 8) - gets simplified down to O(n^2) - the minor differences from removing the smaller terms won't matter in the big picture




*/


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
// This is O(1) since it is constant, will always have 3 operations: (f(n) = 1)
// const addUpTo2 = (n) => {
//     return n * (n + 1) / 2;
// }


// Operation count in this example scales with n. Depending on how operations are counted, based on notes below, If n = 10, this function would have 7 * 10 = 70 operations to complete compared to 30 in the other example
// exact number doesn't matter, what matters is how it scales as n grows.
// Operations grow as n grows, runtime grows. Number of operations is (eventually) bounded by a multiple of n (i.e. 10n)
// this is linear - O(n) - (f(n) = n)
// const addUpTo = (n) => {
    // single assignment when the function runs.
    // let total = 0
    // ++ is shorthand for i += 1. So 2 operations here as well per loop. Scales with n
    // i = 1 single assignment at the start of the loop
    // i <= n is a single operation per loop.
    // for(let i = 1; i <= n; i++) {
        // addition here is only 1 operation/loop. If N is 5, it becomes 5 operations. N = 20, 20 operations, etc. The "=" is a second operation per loop. n additions + n assignments(=). The larger the number, the more operations.
        // total += i
    // }
    // return total
// }



//########## BIG O ##########
// Is the number of simple operations the computer has to do as n increases.
// O(f(n)) = An algorithm is O(f(n)) if the number of simple operations is eventually less than a constant times f(n) as n increases
    // what does a chart look like as n grows

/* 

f(n) could be liner: (f(n) = n)
f(n) could be quadratic: (f(n) = n^2)
f(n) could be constant: (f(n) = 1) - usually fastest
f(n) could be : (f(n) = n)


*/

// This functino is O(n) It is still linear despite having two loops happening independant of each other.
const countUpAndDown = (n) => {
    console.log("Going up!")
    // this first loop is O(n)
    for (let i = 0; i<n; i++) {
        console.log(i)
    }
    console.log("At the top! \nGoing down...")
    // this loop is also O(n)
    for (let j = n - 1; j>= 0; j--) {
        console.log(j)
    }
    console.log("Back down. Bye!")
}

//this is O(n^2) aka O(n * n). This also a quadratic example.
// the second loop  runs n * n times per iteration of the first loop. n = 3, i runs 3 times, j runs 9 times.
 const printAllPairs = (n) => {
    //this loop is O(n)
    for (var i = 0; i < n; i++) {
        //this loop is also O(n)
        for (var j  = 0; j < n; j++) {
            console.log(i,j)
        }
    }
 }

// will log 5 or n, whichever is larger. This is another example of a constant algorithm O(n)
 const logAtLeast5 = (n) => { 
    for (var i = 1; i <= Math.max(5, n); i++){
        console.log(i)
    }
 }

 // will log 5 or n, whichever is smaller. This is another example of a constant algorithm O(1) -
 const logAtMost5 = (n) => { 
    for (var i = 1; i <= Math.min(5, n); i++){
        console.log(i)
    }
 }


 // ######### SPACE COMPLEXITY ##########

 // auxiliary space complexity refers to the space required by the algorithm, not including space taken up by the inputs

 /* GENERALIZATIONS

    1. Most primitives (booleans, numbers, undefined, null) are constant space
    2. Strings require O(n) space (n = string length)
    3. Reference types are generally O(n),(n = array length | n = number of keys in an object)


 */


    // Only 2 variables at all times, regardless of input. Variable value will change but will always be 2 variables
    // O(1) space
const sum = (arr) => {
    //regardless of array, will always only have one total.
    let total = 0;
    // value of i is counted as a second number regardless of array.
    for (let i = 0; i< arr.length; i++) {
        total += arr[i]
    }
    return total
}

// O(n). newArr will always be a new array in memory directly related to the length of the input array.
const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}

/* LOGARITHMS:

    - Used commonly for complex Big O expressions
    - Number of times you can divide that number by (value) before you get a value less than or equal to one.
    - Logarithm = Inverse of exponentiation: log(value) = exponent === 2^exponent = value (this is log base 2 but base doesn't matter).
    - Usually just shown as "log" for simplicity i.e. log(8) = 3 => (8/2 = 4, 4/2 = 2, 2/2 = 1)
    - O(log n) are very effecient. Second only to O(1), faster than O(n)
    - Some searching algorithms have logarithmic time complexity
    - Efficient sorting algortithms have logarithms
    - Recursion sometimes involves logarithmic space complexity

    EXAMPLES:
        1. log2(8) = 8 === 2^3 = 8
*/

