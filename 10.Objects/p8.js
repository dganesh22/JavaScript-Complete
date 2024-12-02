/* Object.defineProperty(object,key,value) */

let user = {
    name: "john"
}

console.log(`user = `,user)

Object.defineProperty(user,"age", {
    value: 22
})

Object.defineProperty(user,"email", {
    value: "john@gmail.com"
})

console.log(`user = `, user)

