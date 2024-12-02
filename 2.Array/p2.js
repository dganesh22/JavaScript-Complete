// object array

/* 
    var obj  = {
        key:value,
    }
*/

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

console.log(`users =`, users)

users.forEach((val,index) => {
    document.write(`<h1> id = ${val.id} ${val.name} </h1>`)
    document.write(`<h3> email = ${val.email} </h3>`)
})