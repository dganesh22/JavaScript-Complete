/* 
    Object.setPrototypeOf(cloned,newobject)
    used to overwrite the existing cloned object prototype
*/

let user = {
    name: "raj",
    email: "raj@gmail.com"
}

console.log(`user = `, user)

let u1 = Object.create(user)
console.log(`cloned object u1 = `, u1)

console.log(`set prototype = `, Object.setPrototypeOf(u1, { name: "John", email: "john@gmail.com", age: 24 }))

