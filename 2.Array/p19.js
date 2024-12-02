/* Array => constructor */

// Array.of(parameters)

var user = Array.of("john","tom", "sam")

console.log(`user = `, user)


// using by instance 
var colors = new Array("blue", "red", "green")

console.log(`colors =`, colors)

// Array.isArray(input) to check weather the input array or not 

var x = 23;
var str = "welcome";

console.log(`x = `, Array.isArray(x))
console.log(`colors = `, Array.isArray(colors))
console.log(`colors = `, typeof colors)
console.log(`str = `, typeof str)
console.log(`undefined = `, typeof undefined)
console.log(`null = `, typeof null)

// array.at(index)

var tech = ["html", "css", "js", "react"]
console.log(`negetive index =`, tech.at(-1))

console.log(`negetive index =`, tech[-2])
console.log(`negetive index =`, tech[2])


// array.flat(child)

var list = [0,1,2,[3,4,5,[6,7,8,[9]]]]

console.log(`list = `, list)
console.log(`list = `, list.flat(Infinity))
// console.log(`list = `, list.flat(1))
// console.log(`list = `, list.flat(2))
// console.log(`list = `, list.flat(3))
