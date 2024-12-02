
function clockHandler() {
    let x = new Date()
    document.getElementById('clock').innerHTML = `<h1> ${x.toLocaleTimeString()} </h1>`;
}
// setInterval(function,time) ms
// setInterval(clockHandler,1000)

setInterval(function(){
    clockHandler()
},1000)