
// function hoisting

sum(10,20)

// local function
function sum(a,b) {
    console.log(`sum = `, a + b)
}


product(20,30) // reference error: cann't access before initialization

// arrow function
let product = (x,y) => {
    console.log(`product = `, x * y)
}