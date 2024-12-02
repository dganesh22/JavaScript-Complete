
var x = Math.min(); 
console.log(`Math.min()=`, Math.min()) // Infinity

var y = Math.max()
console.log(`Math.max() =`, Math.max()) // -Infinity

// lexico graphical validation > < ===

       // lexicographical comparision  x > y = 1, x < y = -1 , x === y =0

       console.log(`Infinity > -Infinity = `, x > y) // true
       console.log(`Infinity < -Infinity = `, x < y) // false
       console.log(`Infinity === -Infinity = `, x === y) // false