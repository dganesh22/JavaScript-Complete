// prototype inheritance 

function SuperConstructor() {
    this.email = "john@gmail.com"
    this.getEmail = function() {
        document.write(`<h1> email = ${this.email} </h1>`)
    }
}

// prototype  property
SuperConstructor.prototype.name = "John"
SuperConstructor.prototype.getUserInfo = function() {
    document.write(`<h1> name = ${this.name} </h1>`)
}


function BaseConstructor() {
    
}

// inherit
BaseConstructor.prototype.__proto__ = SuperConstructor.prototype;

let x = new BaseConstructor()

console.log(`x = `, x)

// only inherit the external property 
x.getUserInfo() 

// internal property throw run time error
x.getEmail()

