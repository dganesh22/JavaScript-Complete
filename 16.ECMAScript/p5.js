// Spread Operator

let nums = [10,2,3,40,122,60,70,5,20,99,30]


console.log(`max = `, Math.max(10,20,3,40,50,60,70,5,20,99,30))
console.log(`min = `, Math.min(10,20,3,40,50,60,70,5,20,99,30))

console.log(`\n`)

console.log(`max = `, Math.max(nums)) // NaN
console.log(`max = `, Math.max(...nums)) // 122
