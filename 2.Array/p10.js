// reduce(function(ac,cu))

// sum of all the numbers

var nums = [10,20,30,40,50,60,70,80,90]

console.log(`nums =`, nums)

var out = nums.reduce(function(ac,cu){
    return ac * cu
},1)

console.log(`output =`, out)

// remove the duplicates
var ageGroup = [18,20,18,21,23,25,24,23,18,9,11,9,25,21]
console.log(`before =`,ageGroup)

function removeDuplicate(val) {
    var temp = [];
    var start = 0;
    var tmp = {};

    for(let i=0; i< val.length; i++) {
        if(!tmp[val[i]]) {
            tmp[val[i]] = 1;
            temp[start] = val[i]
            start++;
        }
    }
    return temp
}

var output = removeDuplicate(ageGroup)
console.log(`using condition =`, output)

// using reduce to remove duplicates

function usingReduce(val) {
    return val.reduce(function(ac,cu){
        if(ac.indexOf(cu) === -1) {
            ac.push(cu)
        }
        return ac
    },[])
}

var out1 = usingReduce(ageGroup)
console.log(`using reduce =`, out1)


// using set constructor
function usingSet(val) {
    return [...new Set(val)]
}

var out2 = usingSet(ageGroup)
console.log(`using set =`, out2)


// using filter()
function usingFilter(val) {
    return val.filter((item,index,array) => array.indexOf(item) === index)
}

var out2 = usingFilter(ageGroup)
console.log(`using filter =`, out2)

// using foreach loop
function usingForEach(val) {
    let temp = [];

    val.forEach(function(item){
        if(!temp.includes(item)) {
            temp.push(item)
        }
    })
    return temp
}

var out3 = usingForEach(ageGroup)
console.log(`using foreach =`, out3)