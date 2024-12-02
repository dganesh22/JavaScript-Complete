// built in constructors

/* 
    Date()
    Number()
    String()
    Boolean()
    Array()
    Object()
*/
 /* 
            1. constructor structure are same as like function
            2. constructor can't return
            3. constructor instance create using new keyword
            4. constructor maybe parameter / non parameterised
        */

let x  = new Date(); 
console.log(`x = `, x)

  // methods of date - IST
  document.write(`<h3> Day =  ${ x.getDay() } </h3>`);
  document.write(`<h3> Date = ${ x.getDate() } </h3>`);
  document.write(`<h3> month = ${ x.getMonth() } </h3>`); /* 0->jan 11-dec */
  document.write(`<h3> year = ${ x.getFullYear() } </h3>`); 
//   document.write(`<h3> year = ${ x.getYear() } </h3>`); // deprecated

 // methods of time - IST
 document.write(`<h3> Hour = ${ x.getHours() } </h3>`); 
 document.write(`<h3> Min = ${ x.getMinutes() } </h3>`); 
 document.write(`<h3> Sec = ${ x.getSeconds() } </h3>`); 
 document.write(`<h3> Millisecond = ${ x.getMilliseconds() } </h3>`); 