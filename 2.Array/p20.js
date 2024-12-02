
/* Array.reduceRight(callback) */

var arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
]

console.log(`arr = `, arr)

var res  = arr.reduceRight(function(ac,cu) {
    return ac.concat(cu)
})

console.log(`res = `, res)
console.log(`length = `, res.length)