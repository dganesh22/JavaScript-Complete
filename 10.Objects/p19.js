
// methods in a constructor
// consider as property itself

function Calculate(a,b) {
    this.x = a;
    this.y = b;
    this.sum = function() {
        return this.x + this.y
    };
    this.product = () => {
        document.write(`<h1> product = ${this.x * this.y} </h1>`)
    }
}

let c  = new Calculate(10,12)

console.log(`sum = `, c.sum())
c.product()