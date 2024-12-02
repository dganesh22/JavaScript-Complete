

// string methods of date

let x = new Date()
console.log(`x = `, x)

document.write(`<h3> string date = ${ x.toDateString() } </h3>`)
document.write(`<h3> locale date = ${ x.toLocaleDateString() } </h3>`)
document.write(`<h3> string time = ${ x.toTimeString() } </h3>`)
document.write(`<h3> locale Time = ${ x.toLocaleTimeString() } </h3>`)

document.write(`<h3> date and time in ms = ${  Date.now() } </h3>`)