// arrow function

// param return
var sum = (a,b) => {
    return a + b
}

console.log("sum = ",sum(20,30))

// param non-return
var product = (x,y) => {
    console.log(`product =`, x * y)
}

product(10,24)

// non-param return
var getName = () => {
    return `Hi, John js is fun`
}

console.log(`output = `, getName())

// non-param non-return
var display = () => {
    console.log(`this is display result`)
}

display()