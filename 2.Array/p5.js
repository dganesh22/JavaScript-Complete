
// unshift(val) shift()


var user = []

console.log(`user =`, user)

// array.unshift(value)

user.unshift("Harry") // first in
console.log(`after unshift = `, user)

user.unshift("Mark") // first in
console.log(`after unshift = `, user)

user.unshift("John") // first in
console.log(`after unshift = `, user)

// array.shift()
let x1 = user.shift() // first out
console.log(`after shift = `, user)
console.log(`after shift = `, x1)

let x2 = user.shift() // first out
console.log(`after shift = `, user)
console.log(`after shift = `, x2)