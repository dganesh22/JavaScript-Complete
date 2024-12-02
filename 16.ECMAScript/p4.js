/* Spread and Rest Operators */

// ...variable 

/* 
     parameter to array  -> Rest  (group the parameters into array)
     array to parameter  -> Spread (destructure array into individual parameters)
*/

// Rest 
let sum = 0;

function sumOfNum(...x) {
    console.log(`x = `, x)
    
    x.forEach(item => {
        sum += item
    })
    return sum;
}

let out  = sumOfNum(10,20,30,40,50,60,70,80,90)
console.log(`output =`, out)