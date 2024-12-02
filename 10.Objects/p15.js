// accessor properties (get / set)
// get -> read the value from properties
// set => assign the value to the properties


let user = {
    first: "john",
    last: "mathew"
}

Object.defineProperty(user, "fullName", {
    get: function () {
        return this.first + " " + this.last;
    },
    set: function(val) {
        [this.first,this.last] = val.split(" ")
    }
})

console.log(`first =`, user.first)
console.log(`last =`, user.last)

console.log(`fullName = `, user.fullName) // john mathew

user.last = "david"
console.log(`fullName = `, user.fullName) // john david

user.first = "Henry"
console.log(`fullName =`, user.fullName) // Henry david