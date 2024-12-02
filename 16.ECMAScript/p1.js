// Scope

/* 
    local or block Scope 
        let 
        const 
            - re assignment of value is not possible
    global Scope
        var
*/

if(true) {
    var x = 12;
    console.log(`local scope =`, x)
}

console.log(`global scope =`, x)