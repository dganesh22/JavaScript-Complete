/* 
    Array 
        1. Single - literal array
             a. array literal
             b. array using constructor
             c. array using constructor parameter
        2. Multi
        3.Object Array
            a.object array
            b. array using constructor
            c. array using constructor parameter
        4. JSON Array 
            JavaScript Object Notation => server response
*/

// array literal
var colors = ["green", "red", "blue"]

console.log(`colors=`, colors)

//array.forEach(function(val,index){})

colors.forEach(function(val,index){
    console.log(`value = ${val} and index = ${index}`)
})

// array using constructor -> assigning the values
var user = new Array()
user[0] = "john"
user[1] = "sam"
user[2] = "cherry"
user[3] = "tom"

console.log(`user = `, user)

// array using constructor parameter
var tech = new Array("html", "css", "js", "react")

console.log(`tech =`, tech)