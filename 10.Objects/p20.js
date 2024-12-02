// prototype in constructor
// using prototype we can create a property of constructor externally

function Car() {
    
}

// Constructor.prototype.property = value;

Car.prototype.title = "Toyota Innova"
Car.prototype.color = "white"
Car.prototype.getInfo = function() {
    return this.title + ", and color is " + this.color
}

let x = new Car()

console.log(`instance =`, x)

console.log(`info = `, x.getInfo())