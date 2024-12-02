// Object.defineProperties(object,{key,value})

let car = {}

console.log(`car = `, car)

Object.defineProperties(car,{
    title: {
        value: "thar"
    },
    color: {
        value: "red"
    },
    make: {
        value: 2024
    }
})

console.log(`car = `, car)