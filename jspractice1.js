function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = (cTemp * 9/5) +32;
    var messge = cTemp + '\xB0C is' +  " "+cToFahr + '\xB0F.';
    console.log(messge);
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) *5 / 9;
    var messge = fTemp + '\xB0F. is' + " " +fToCel + '\xB0C';
    console.log(messge);
}
cToF(60);
fToC(120)
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + daylist[day]);
var hr= today.getHours();
var min= today.getHours();
var sec= today.getSeconds();

var prepand = (hr >= 12) ? "PM":"AM";
hr = (hr >=12)? hr - 12: hr;
if(hr===0 && prepand==='PM'){
    if(min===0 && sec===0){
        hr= 12;
        prepand= 'Noon';
    }
    else{
        hr= 12;
        prepand= 'PM';
    }
}

if(hr===0 && prepand==='AM'){
    if(min===0 && sec===0){
        hr= 12;
        prepand= 'Midnight';
    }
    else{
        hr= 12;
        prepand= 'AM';
    }
}
console.log("Current Time :" +hr + prepand + " : " + min + " : " +sec);
var today = new Date();
var day = today.getDay();   
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is: " + daylist[day]);   
var hr= today.get();
var min= today.getMinutes();