
/* string.charAt(index) => return string char 
  string.charCodeAt(index) => return ASCII value (decial) of the character
*/


var str = "Welcome to Javascript String Input"

console.log(`str =`, str)
console.log(`str charAt =`, str.charAt(3))
console.log(`str charCodeAt =`, str.charCodeAt(3))
console.log(`str charCodeAt =`, str.charCodeAt(4))

console.log(`\n`)

/* 
    string.indexOf(char) -> first position
    string.lastIndexOf(char) -> last position
*/

console.log(`indexOf =`, str.indexOf("t"))
console.log(`lastIndexOf =`, str.lastIndexOf("t"))

console.log(`\n`)

/* 
    string.toLowerCase() & string.toLocaleLowerCase()
    string.toUpperCase() & string.toLocaleUpperCase()
*/

console.log(`lower =`, str.toLowerCase())
console.log(`local lower =`, str.toLocaleLowerCase())

console.log(`upper =`, str.toUpperCase())
console.log(`local upper =`, str.toLocaleUpperCase())

console.log(`\n`)

/* 
    string.replace(target,source)
*/

var str1 = "John is an engineer. john works as Web developer, JOHN stays in bengaluru"

console.log(`string1 =`, str1)
console.log(`string1 =`, str1.replace("john", "tom")) // string
console.log(`string1 =`, str1.replace(/john/, "tom")) // reg expression
console.log(`string1 =`, str1.replace(/john/gi, "tom")) // regex + case 

/* gi => global case insensitive */


console.log(`\n`)

/* 
  break the string statement
    string.slice(start,end)
    string.substring(start,end)
    
    string.substr(start,length) -> (deprecated)
*/

console.log(`slice = `, str1.slice(5,18))
console.log(`substring = `, str1.substring(5,10))
console.log(`substr = `, str1.substr(10,9))