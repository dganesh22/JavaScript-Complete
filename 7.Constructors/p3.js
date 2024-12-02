// set methods of date

let x  = new Date("August 10, 1975 23:15:30")

console.log(`x = `, x)

x.setDate(15)
console.log(`x = `,x)

/* setDate,setDay,setMonth,setFullYear, setHours,setMinute,setSeconds,setMilliSeconds */

x.setFullYear(1989)
console.log(`x = `,x)

x.setHours(3)
x.setMinutes(30)
x.setSeconds(55)

console.log(`x = `,x)