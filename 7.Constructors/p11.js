// Number for float and double values

var x = 123.345566;

        console.log(`x = `, x)
        console.log(`x = `,typeof x) // number
        
        console.log(`x = `, x.toFixed(2)) // return 123.35
        console.log(`x = `, typeof x.toFixed(4)) // string

        console.log(`x = `, x.toPrecision(2)) // 1.2e+2

        console.log(`valueof = `, x.valueOf()) // 123.345566

 // any value to integer
 console.log(`int =`, parseInt(x))

 // any value to floating point value conversion
 var y = 33;
 console.log(`y = `, y)
 console.log(`y in float = `, parseFloat(y))

 var str = "3.4 days";
 console.log(`str = `, str) // 
 console.log(`parseFloat(str) = `, parseFloat(str)) // 3.4
 console.log(`parseInt(str) = `, parseInt(str)) // 3