// Object properties as read only (write protected)

/* 
    using writable property -> 
    true = writable
    false = read only
*/

let user = {}

Object.defineProperty(user, "name", {
    value: "John",
    writable: false
})

console.log(`user = `, user) // john

user.name = "Tom" // re assign the new value

console.log(`after user = `, user) // tom