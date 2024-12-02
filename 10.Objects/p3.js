// Object.getPrototypeOf()

// defined object
let book = {
    author: "sam",
    type: "text book"
}

console.log(`book = `, book)

// cloned object
let b1 = Object.create(book)

// to read the properties of cloned object
console.log(`b1 = `, b1)

console.log(`b1 = `, Object.getPrototypeOf(b1))

