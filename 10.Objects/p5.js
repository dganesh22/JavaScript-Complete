// Object inheritance  using Object.create()

let x1 = {
    name: "Tom",
    email: "tom@gmail.com"
}

// is an inherited object
let x2 = Object.create(x1, {
    age: {
        value: 22
    },
    city: {
        value: "bengaluru"
    }
})

console.log(`x1 = `, x1)
console.log(`x2 = `, x2)

/* 
    task
    Car = title,fuel
    c1 = Car, color,make
*/