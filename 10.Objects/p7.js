// object inheritance using __proto__ keyword

let e1 = {
    name: "David",
    last: "Martin"
}

let e2 = {
    email: "davidmartin@gmail.com",
    mobile: "9966887744",
    age: 22,
    __proto__: e1
}

let e3 = {
    city: "bengaluru",
    zip: 560089,
    __proto__: e2
}

console.log(`e1 = `, e1)
console.log(`e2 = `, e2)
console.log(`e3 = `, e3)