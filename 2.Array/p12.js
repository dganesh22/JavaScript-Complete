var people = [
    { name: "John", age: 22},
    { name: "Mike", age: 24},
    { name: "Lara", age: 23},
    { name: "Kane", age: 22},
    { name: "Harry", age: 21},
    { name: "Jovil", age: 18},
    { name: "Anna", age: 24},
    { name: "Winson", age: 20}
]


function groupUsers(data,prop) {
    return data.reduce(function(pv,cu) {
        let val = cu[prop] // cu['age']

        if(!pv[val]) {
            pv[val] = []// create an empty of based on age value
        }

        pv[val].push(cu) // push the object to the respective age group
        return pv
    }, {})
}

/* 
    {
        18: [],
        22: [],
        23: []
    }
*/

var out1 = groupUsers(people,"age")
console.log(`output =`, out1)