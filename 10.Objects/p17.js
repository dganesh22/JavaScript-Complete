// Custom Constructors
/* 
1. Constructor syntax follows the function
2. name of the constructor first letter is uppercase (not mandatory)
3. constructor cann't return
4. variables and functions declared with in constructor body properties of constructor
5. properties are create using "this" keyword
6. to access properties of constructor by creating instance of the constructor using "new" keyword

function Sample(param) {
    this.property = value;
}

let instance = new Sample(params)

*/

function Book() {
    this.title = "Java"
    this.author = "xyz"
    this.isbn = "1234543"
    this.pages = 240
    this.isPdf = false
}

// instance = 
let x = new Book()

console.log(`x = `, x)

console.log("title = ", x.title)
console.log("author = ", x.author)
console.log("pages = ", x.pages)