// array methods

/* 
    1. static 
    2. instance
*/

// instance => push, pop, unshift and shift , splice

// Last in Last out
// push -> used to add value at the ending position
// pop -> remove the value from end

var user = [];

user.push("John")
console.log(`user =`, user)

user.push("Tom")
console.log(`user =`, user)

user.push("Sam")
console.log(`user =`, user)

user.push("Harry")
console.log(`user =`, user)

console.log(`\n`)
user.pop()
console.log(`user pop =`,user)

user.pop()
console.log(`user pop =`,user)

user.pop()
console.log(`user pop =`,user)