// Number constructor 

let x = "1234";

console.log(`x = `, x)
console.log(`x = `, typeof x)
console.log(`x = `, Number(x))
console.log(`x = `, typeof Number(x))

console.log(`\n`)

console.log(`boolean =`, Number(true)) // 1
console.log(`boolean =`, Number(false)) // 0

console.log(`\n`)

console.log(`date = `, Number(new Date())) // return number in milliseconds passed since 1970

console.log(`max_value =`, Number.MAX_VALUE) // largest possible max value in js
console.log(`min_value =`,  Number.MIN_VALUE) // smallest possible min value in js

console.log(`-infinity =`, Number.NEGATIVE_INFINITY) // -Infinity
console.log(`+infinity =`, Number.POSITIVE_INFINITY) // Infinity


console.log(`\n`)

