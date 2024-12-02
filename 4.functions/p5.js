// local function

// param return
var sum = function (a,b){
    return a + b
}

console.log("sum = ",sum(20,30))

// param non-return
var product = function (x,y){
    console.log(`product =`, x * y)
}

product(10,24)

// non-param return
var getName = function (){
    return `Hi, John js is fun`
}

console.log(`output = `, getName())

// non-param non-return
var display = function () {
    console.log(`this is display result`)
}

display()