// GMT Time

let x = new Date()

 // GMT (Greenwich Mean Time) / UTC (Co-ordinated Universal Time)
 document.write(`<h3> UTC Date = ${ x.getUTCDate() } </h3>`); 
 document.write(`<h3> UTC Day  = ${ x.getUTCDay() } </h3>`); 
 document.write(`<h3> UTC Month  = ${ x.getUTCMonth() } </h3>`); 
 document.write(`<h3> UTC year  = ${ x.getUTCFullYear() } </h3>`); 

 document.write(`<h3> UTC hour  = ${ x.getUTCHours() } </h3>`); 
 document.write(`<h3> UTC min  = ${ x.getUTCMinutes() } </h3>`); 
 document.write(`<h3> UTC Sec  = ${ x.getUTCSeconds() } </h3>`); 
 document.write(`<h3> UTC Millisecond  = ${ x.getUTCMilliseconds() } </h3>`); 