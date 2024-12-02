class User {
    constructor(a,b) {
        this.name = a;
        this.email = b;
    }

    getUser() {
        return this.name + ", and email is =" + this.email;
    }
}

// Class Expressions -> classes are assigned to variables

let User1 = class {
    constructor(a,b) {
        this.name = a;
        this.email= b;
    }

    getUser() {
        return this.name + ", email is =" + this.email;
    }
}

let x = new User1("John", "john@gmail.com")

console.log(`x =`, x)
console.log(`name = `, x.name)
console.log(`email = `, x.email)

console.log(`method = `, x.getUser())