// object constructor

// 1. object using new keyword
var user = new Object();

user.name = "john"
user.age = 22
user["city"] = "bengaluru"

console.log(`user = `, user)

document.write(`<h1> object = ${user} </h1>`)
document.write(`<h1> name = ${user.name} </h1>`)

//2. object as parameter

var tech = new Object({ title: "html", duration: "1month"})

console.log(`tech =`, tech)