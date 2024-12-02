
// logic to get the current user co-ordindates using geolocation

// lat , lng

function getMyLocaiton() {
    navigator.geolocation.getCurrentPosition(function(pos){
        console.log(`position,`, pos) 
        console.log(`longitude =,`, pos.coords.longitude) 
        console.log(`latitude =,`, pos.coords.latitude) 
    },function(err){
        console.log(`err =`, err)
    },{
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    })
}

getMyLocaiton()