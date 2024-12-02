// writable property in Object.defineProperties

let user = {}

Object.defineProperties(user, {
    name: {
        value: "henry",
        writable: false
    },
    email: {
        value: "henry@gmail.com",
        writable: false
    },
    mobile: {
        value: "9988338844",
        writable: false
    }
})

console.log(`before reassign user = `, user)

user.name = "Sam"
user.email = "sam@gmail.com"
user.mobile = "9900998877"

console.log(`after reassign user = `, user)
