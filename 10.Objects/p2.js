/* 
    Object.methods
*/

let car = {
    make: 2024,
    color: 'red'
}

console.log(`car = `,car)
// ObjectConstructor.create(object)


// it will copy/clone the car prototype in thar
// inheriting the existing object properties into another variable
let thar = Object.create(car)
let innova = Object.create(car)


console.log(`thar = `, thar)
console.log(`innova = `, innova)
