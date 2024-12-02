/* Inheritance chain using Object.create */

let b1 = {
    title: "Javascript",
    isbn: 1234545
}

let b2 = Object.create(b1, {
    author: {
        value: "sam"
    },
    pages: {
        value: 240
    }
})

let b3 = Object.create(b2, {
    press: {
        value: "XZY printers"
    },
    city: {
        value: "Bengaluru"
    },
    price: {
        value: 220
    }
})


console.log(`object b3 =`, b3)
