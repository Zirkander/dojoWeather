function weatherInfo(this){
    alert("Information about this city is unknown at this time...")
}

function convert(cel){
    var cTemp = cel;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
    console.log(this);
}


function goAway(){
    document.getElementById("cookie").style.visibility = "hidden";
}