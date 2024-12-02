
/* function definition */
function sum() {
    console.log(`sum function called`)
}

// expression arrow
var product = () => {
    console.log(`product function called`)
}

// expression local function
var diff = function() {
    console.log(`diff function is called`)
}

sum()
product()
diff()