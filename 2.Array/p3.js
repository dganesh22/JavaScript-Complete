// JSON array

var users = [
    {
        id: 1,
        name: "john",
        email: "john@gmail.com"
    },
    {
        id: 2,
        name: "tom",
        email: "tom@gmail.com"
    },
    {
        id: 3,
        name: "sam",
        email: "sam@gmail.com"
    }
]

console.log(`object array =`, users)

var jsonUsers = JSON.stringify(users) // object to json

console.log(`json array =`, jsonUsers)
console.log(`obj array =`, JSON.parse(jsonUsers)) // json to object