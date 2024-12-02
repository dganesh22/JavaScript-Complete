document.write(`<h3> acos(adj/hyp) = ${ Math.acos(8/10) } </h3>`); 
document.write(`<h3> acos(adj/hyp) = ${ Math.acos(-1) } </h3>`); 
document.write(`<h3> acos(adj/hyp) = ${ Math.acos(0) } </h3>`); 
document.write(`<h3> acosh(x) = ${ Math.acosh(2) } </h3>`); 


document.write(`<h3> trunc(x) = ${ Math.trunc(12.33) } </h3>`); 
document.write(`<h3> trunc(x) = ${ Math.trunc(0.33) } </h3>`); 
document.write(`<h3> fround(x) = ${ Math.fround(5.389699899).toFixed(3) } </h3>`); 

console.log(`Math random =`, Math.random()) // 0-1

let out1=  Math.round(Math.random() * 100);
console.log(`random 1 - 100 =`,out1)

console.log(`\n`)

console.log(`Math.exp(1) =`, Math.exp(1)) // Eluers 2.718
console.log(`Math.exp(-1) =`, Math.exp(-1)) // 0.367
console.log(`Math.exp(0) =`, Math.exp(0)) // 1

 /* 
            Math.acosh(2)
            Math.asinh(x)
            Math.atan(x)
            Math.atanh(x)
            Math.atan2(y,x)
            Math.cos(x)
            Math.cosh(x)
            Math.exp(x) E^x Euler's const (2.718) 
            Math.fround(x); // float round
            Math.log(x)
            Math.log1p(x)
            Math.log10()
            Math.log2(x)
            Math.pow(x,y) x^y 
            Math.sign(x)
            Math.sin(x)
            Math.sinh(x)
            Math.tan(x)
            Math.tanh(x)
            Math.trunc(x) -> integer portion of x (removes fractional digits)
        */