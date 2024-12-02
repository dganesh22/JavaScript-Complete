/* 
    string.concat(input) -> merge /join
    string.trim() -> eleminated the white space
*/

var first = "John"
var second = " David"

console.log(`concat =`, first.concat(second))

var third = second.trim()
console.log(`concat =`, first.concat(third))

console.log(`\n`)

/* 
    string.split(input) -> splits the word / char with given ref and return as array
*/

var str = "welcome to javascript string";

console.log(`str = `, str)
console.log(`str = `, str.split('')) // splits character
console.log(`str = `, str.split(' ')) // splits word

var res = str.split(' ');
console.log(`res =`, res)
console.log(`res =`, res.join())

// welcome => reverse the string
var str1 = "welcome"
console.log(`split =`, str1.split(''))
console.log(`reverse =`, str1.split('').reverse())
console.log(`join =`, str1.split('').reverse().join(''))

// reverse the string through loop

function strRev(val) {
    let temp = ""
    let i = val.length - 1
    while(i >= 0) {
        temp += val[i]
        i--
    }
    console.log(`reverse =`, temp)
}

strRev("HelloWorld")