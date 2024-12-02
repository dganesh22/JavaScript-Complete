
// array.sort(callback)

var nums = [23,45,6,9,99,49,69,24,18]

console.log(`nums =`, nums)

// ascending order
var res1 = nums.sort(function(a,b){
    return a - b
})

console.log(`ascending =`, res1)

// decending order
var res2 = nums.sort(function(a,b){
    return b - a
})

console.log(`ascending =`, res2)

var users = ["john", "raju", "sam", "albert", "mary", "noel"]

console.log(`users =`, users)