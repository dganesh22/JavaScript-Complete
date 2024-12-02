/* 
// direct object
    var object = {
        key: value,
        key: value
    }
    // using instance
    var objectInstance = new Object()
 var/let/const 
      values -> string,number,bool,null,undefined,array,function,object
      key -> unique, 
            key must be start with string / string followed by number
            based on value the data type of key is decided

    prototype => the structure of an object with its key value pairs 
*/

var user = {
    name: "sam",
    email: "sam@gmail.com",
    age: 22,
    isUser: true,
    hobbies:["driving", "riding", "running"],
    city: {
        title: "bengaluru",
        pin: null,
        zip: undefined
    },
    getName: function() {
        return `My name is ${this.name}`
    },
    getEmail: () => {
        // this pointer is disabled in an arrow function
        return `My email is ${this.email}`
    }
}   


// print only console can destructure an object not a DOM
console.log(`user = `, user)
document.write(`user = ${user}`) // [object Object]

document.write(`<p> name = ${user.name} </p>`) // object.key
document.write(`<p> email = ${user["email"]} </p>`) // object["key"]

document.write(`<p> age = ${user.age} </p>`)
document.write(`<p> isUser = ${user.isUser}  </p>`)
document.write(`<p> hobbies =${user.hobbies}  </p>`)

user.hobbies.forEach((item,index) => {
    document.write(`<p> ${index} ${item}  </p>`)
});

document.write(`<p> city = ${user.city.title}  </p>`)
document.write(`<p> pin = ${user.city.pin}  </p>`)
document.write(`<p> zip = ${user.city.zip}  </p>`)

document.write(`<p> ${user.getName()} </p>`)
document.write(`<p> ${user.getEmail()} </p>`)