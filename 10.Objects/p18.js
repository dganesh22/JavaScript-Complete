// Parameterised Constructor

function User(na,em,mo) {
    this.name = na;
    this.email = em;
    this.mobile = mo;
}

let x1 = new User("Tom", "tom@gmail.com", "9988776655")
let x2 = new User("Henry", "henry@gmail.com", "8899007766")

console.log(`x1 = `, x1)
console.log(`x2 = `, x2)