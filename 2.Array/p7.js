// find and filter

// array.find(callback)
// array.filter(callback)

var user = [
    {
        id: 1,
        name: "John",
        last: "Mathew",
        email: "johnmathew@gmail.com"
    },
    {
        id: 2,
        name: "David",
        last: "Mathew",
        email: "davidmathew@gmail.com"
    },
    {
        id: 3,
        name: "Mary",
        last: "Francis",
        email: "maryfrancis@gmail.com"
    }
]

console.log(`user = `, user)    

let res = user.find(function(item){
    return item.id === 3
})
console.log("find = ", res) // single value / single object

let res1 = user.filter(function(item){
    return item.last === "Mathew"
})
console.log(`filter =`, res1) // array of values