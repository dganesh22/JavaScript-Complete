/* Object.assign(src,dest) */

// merge the common properties 

let u1 = {
    name: "rohan",
    email: "rohan@gmail.com"
}

let u2 = {
    email: "rohan@ymail.com",
    mobile: "9900887766"
}

console.log(`u1 = `, u1)
console.log(`u2 = `, u2)

// after merge
let res = Object.assign(u1,u2)

console.log(`after merge = `, res)