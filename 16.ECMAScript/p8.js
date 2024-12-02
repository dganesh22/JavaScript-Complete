// generator methods (functions)
/* 
    A function that returns iterators 
*/

function *getUsers() {
    // console.log(`function`)
    yield "John"
    yield "Sam"
    yield "Tom"
    yield "Harry"
}

console.log(`function = `, typeof getUsers())

let x = getUsers()

console.log(`x = `, x)
console.log(`first = `, x.next())
console.log(`second = `, x.next())
console.log(`third = `, x.next())
console.log(`fourth = `, x.next())