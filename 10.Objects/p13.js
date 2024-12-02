// Object.freeze()
// freezes the entaire object (read only)

let user = {
    name: "john",
    email: "john@gmail.com",
    age : 22
}

Object.defineProperty(user, "city", {
    value: "Bengaluru",
    writable: true
})

console.log(`user =`, user)

Object.freeze(user) // to freeze the object (read only)

user.name = "Tom"
user.email = "tom@gmail.com"
user.age = 24
user.city = "mysore"

console.log(`after reassign = `, user)