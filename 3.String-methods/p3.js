/* string comparision (lexicographically)
    a and b
   
    a > b = 1
    a < b = -1
    a === b = 0
*/

// string.localCompare()

var a = "hello"
var b = "hello"
var c = "world"

console.log(`a === b `, a.localeCompare(b)) // 0
console.log(`c > a `, c.localeCompare(a)) // 1
console.log(`a < c `, a.localeCompare(c)) // -1

console.log(`\n`)

// sort

let tech = ["html", "css", "javascript", "react", "java", "express", "nodejs", "python"]

console.log(`before = `, tech)

var res = tech.sort(function(a,b) {
    return a.localeCompare(b)
})
console.log(`string sort =`, res)

var res1 = tech.sort(function(a,b) {
    return b.localeCompare(a)
})
console.log(`reverse string sort =`, res1)