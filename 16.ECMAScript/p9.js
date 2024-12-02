// generator function as method inside the class

class Person {
    *getPerson() {
        yield "David"
        yield "Micheal"
        yield "Robert"
        yield "Anna"
    }
}

let x = new Person()

for(let item of x.getPerson()) {
    console.log(`name = `, item)
}