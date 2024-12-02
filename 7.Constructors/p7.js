// round off

// ceil -> 2.1 - 2.9 -> 3 
// floor -> 2.1 - 2.9 -> 2
// round -> 0.5 ref

document.write(`<h3> floor(2.9) = ${ Math.floor(2.9) } </h3>`); /* lowest int */
document.write(`<h3> floor(2.1) = ${ Math.floor(2.1) } </h3>`); /* lowest int */
document.write(`<h3> floor(-3.4) = ${ Math.floor(-3.4) } </h3>`); /* lowest int */

document.write(`<h3> ceil(2.1) = ${ Math.ceil(2.1) } </h3>`); /* highest int */
document.write(`<h3> ceil(2.9) = ${ Math.ceil(2.9) } </h3>`); /* highest int */
document.write(`<h3> ceil(2.9) = ${ Math.ceil(-4.8) } </h3>`); /* highest int */

document.write(`<h3> round(2.2) = ${ Math.round(2.2) } </h3>`); /*  >= 0.49 = lowest */
document.write(`<h3> round(2.6) = ${ Math.round(2.6) } </h3>`); /* < 0.5 = highest */
document.write(`<h3> round(-2.6) = ${ Math.round(-2.6) } </h3>`); /* -3 */
document.write(`<h3> round(-2.4) = ${ Math.round(-2.4) } </h3>`); /* -2 */