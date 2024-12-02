// array.map()

var emp = ["Sam","Harry", "Ali", "Raju", "Noel"]

var users = [
    {
        id: 1,
        name: "John",
        gender: "male",
        city: "Bengaluru"
    },
    {
        id: 2,
        name: "Sara",
        gender: "female",
        city: "Mangaluru"
    },
    {
        id: 3,
        name: "Joel",
        gender: "male",
        city: "Chennai"
    },
    {
        id: 4, 
        name: "Anna",
        gender: "female",
        city: "Mumbai"
    }
]

console.log(`emp = `, emp)

var emp1 = emp.map(function(val,index) {
    return `Hi ${val}, welcome to javascript`
})
console.log(`emp1 = `, emp1)


console.log(`users =`, users)

var users1 = users.map((val,index) => {
        if(val.gender === "male") {
            return "Mr. " + val.name 
        } else if (val.gender === "female") {
            return `Mrs. ${val.name}`
        }
})

console.log(`users1 =`, users1)


/* 
Task-1 
var nums = [10,24,50,60,70,35,6,7,39,59,90,32,2,3,9,11]
    using map method return only prime numbers?
*/

var nums = [10,24,50,60,70,35,6,7,39,59,90,32,2,3,9,11]
let temp = []


function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }


arr.map((item, index) => {

    let val = isPrime(item);
    if (val) {
      temp.push(item);
    }

  });

  console.log(`prime =`, temp);
