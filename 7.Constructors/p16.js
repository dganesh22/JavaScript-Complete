/* 
    Custom object
    1.structure it follows the function
    2. object name first letter maintain as uppercase (not mandatory)
    3. can't return 
    4. this keyword is used to create constructor properties
*/

function Car() {
    this.title = "toyota etios";
    this.color = "red";
    this.year = 2024;
}

let x = new Car();

console.log(`x = `, x)