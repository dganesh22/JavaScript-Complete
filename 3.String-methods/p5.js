
/* 
    string.padStart(length,char)
    string.padEnd(length,char)
*/

var str = "94825"

console.log(`pad start =`, str.padStart(10,"*"))
console.log(`pad end =`, str.padEnd(10,"*"))

console.log(`\n`)

/* 
    string.replace()
    string.replaceAll()
*/

var str2 = "ball bat"

console.log(`input =`, str2)
console.log(`input =`, str2.replace('b', 'c'))
console.log(`input =`, str2.replaceAll('b', 'c'))

console.log(`\n`)

/* search */
var msg1 = "javascript is web scripting language, and also can be used as a server Script too.";

var exp = /script/;

console.log(`search =`, msg1.search(exp))//first match index