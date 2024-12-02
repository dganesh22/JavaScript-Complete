// Math constructor / object

document.write(`<h3> abs(-12) = ${ Math.abs(-12) } </h3>`); // 12
document.write(`<h3> abs(24) = ${ Math.abs(24) } </h3>`); // 24 

document.write(`<h3> abs(null) = ${ Math.abs(null) } </h3>`); // 0
document.write(`<h3> abs([]) = ${ Math.abs([]) } </h3>`); // 0
document.write(`<h3> abs('') = ${ Math.abs('') } </h3>`); // 0

document.write(`<h3> abs([2]) = ${ Math.abs([2]) } </h3>`); // 2


document.write(`<h3> abs([1,2,3]) = ${ Math.abs([1,2,3]) } </h3>`); // NaN
document.write(`<h3> abs({}) = ${ Math.abs({}) } </h3>`); // NaN
document.write(`<h3> abs("Welcome") = ${ Math.abs("Welcome") } </h3>`); // NaN
document.write(`<h3> abs("-123a") = ${ Math.abs("-123a") } </h3>`); // NaN

document.write(`<h3> abs("-123") = ${ Math.abs("-123") } </h3>`); // 123


        document.write(`<h3> sqrt(25) = ${ Math.sqrt(25) } </h3>`);
        document.write(`<h3> cbrt(27) = ${ Math.cbrt(27) } </h3>`);

        document.write(`<h3> min(27,123,34,3) = ${ Math.min(27,123,34,3) } </h3>`);
        document.write(`<h3> max(27,123,34,3) = ${ Math.max(27,123,34,3) } </h3>`);