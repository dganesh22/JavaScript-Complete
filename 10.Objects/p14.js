// Object to Entries Conversion

/* 
    Object -> group of properties (key:value)
    Entries -> group of properties (key => value) , array of array
*/

let car = {
    title: "thar",
    company: "mahindra",
    make: 2024
}

console.log(`car = `, car)

// object -> entries (array of array)
let out = Object.entries(car)

console.log(`entries = `, out)

// to entries
let ent = new Map(out)
console.log(`map out = `, ent) 

// from entries -> object
let obj = Object.fromEntries(ent)
console.log(`object =`, obj)