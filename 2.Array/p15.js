// array.every(condition method) -> all values has to validate condition 

let ageGroup = [18, 21, 1, 8, 51, 18, 21, 5, 18, 7, 10];


function check(age) {
    return age >= 18
}

let out1 = ageGroup.every(check)
console.log(`every = `,out1) // false

let ageGroup1 = [18,19,20,42,32]

let out2 = ageGroup1.every(check)
console.log(`every = `,out2) // true


// array.some() -> at least one value 
let out3 = ageGroup.some(check)
console.log(`some ageGroup = `,out3)

let out4 = ageGroup1.some(check)
console.log(`some ageGroup1 = `,out4)

let ageGroup2 = [1,4,5,6,11]
console.log(`some ageGroup2 =`, ageGroup2.some(check))