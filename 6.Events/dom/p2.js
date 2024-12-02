
// menu , body tag, close btn
let cMenu = document.querySelector(".context-menu")
let pBody = document.querySelector("body")
let clsBtn = document.querySelector(".cls")

pBody.addEventListener("contextmenu", function(event){
    event.preventDefault();// to avoid page refresh

    // cursor position
    console.log(`x =${event.clientX}px and y = ${event.clientY}px`);

    cMenu.style.left = `${event.clientX}px`; // x -axis
    cMenu.style.top = `${event.clientY}px`; // y - axis

    cMenu.classList.add("active")
});

clsBtn.addEventListener("click",function(){
    cMenu.classList.remove("active")
})