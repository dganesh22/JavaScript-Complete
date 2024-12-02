/* 
string.repeat(times)
*/

var str = "hello"

console.log(`str = `, str.repeat(2))
console.log(`str = `, str.repeat(5))

console.log(`\n`)

/*
check the string is ends with input or not
string.endsWith(input)
*/
var str = "welcome to javascript"

var check = str.endsWith("script")
console.log(`check =`, check)

console.log(`\n`)
/* 
return string from ascii value
    String.fromCharCode(ascii)
    String.fromCodePoint(ascii)
*/

var str = String.fromCharCode(72,69,76,76,79)
console.log(`str = `, str)

var str1 = String.fromCodePoint(72,69,76,76,79)
console.log(`str1 = `, str1)

console.log(`\n`)

/* 
 to check the given input is present in string or not
    string.includes(input)
*/

var str2 = "javascript is fun"
console.log(`str2 =`, str2.includes("is"))
console.log(`str2 =`, str2.includes("there"))

console.log(`\n`)

/* 
    string.match(input) -> first matched string
    string.matchAll(input) -> all matches
*/

var str3 = "javascript is frontend programming script"
var inp = /programming/; // regular expression string
console.log(`match =`, str3.match(inp))

var str4 = "javascript is web SCRIPT language and also canbe used as server Script too."
var inp2 = /script/gi;

var out = str4.matchAll(inp2)
console.log(`matchall =`, out)

for(let item of out) {
    console.log(`iterator =`, item)
}
