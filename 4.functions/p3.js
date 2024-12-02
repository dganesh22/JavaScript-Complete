// param return

function user(name) {
    return `Mr. `+ name;
}

var res = user("John")
console.log(`param return =`, res)
res = user("Tom")
console.log(`param return =`, res)

console.log(`\n`)

// param non-return

function product(a,b) {
    console.log(`product = `, a * b)
}

product(10,23)
product(11,2)

// non-param return
function getUser() {
    return "Hi, John welcome js"
}

console.log(`output =`, getUser())

// non-param and non-return
function getDetails() {
    console.log(`Hi, Tom javascript is fun`)
}

getDetails()