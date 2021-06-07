let d = new Date();

let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let temp1 = 0;
let temp2 = 0;
let temp3 = 0;


// Set the Hour-Hand
if( hours>12 ){ hours-=12;  }; // Set the time in '12-hour' format

if(hours>=1 && hours<=3){
    temp1 = 360 - (3 - hours) * 30;
    document.getElementById("hour").style.transform = `rotate(${temp1}deg)`;
}
else if(hours>=4 && hours<=12){
    temp1 = (hours - 3) * 30;
    document.getElementById("hour").style.transform = `rotate(${temp1}deg)`;
}


// Set the Minute-Hand
if(minutes>=1 && minutes<=15){
    temp2 = 360 - minutes * 6;
    document.getElementById("minute").style.transform = `rotate(${temp2}deg)`;
}
else if(minutes>=16 && minutes<=60){
    temp2 = minutes * 6 - 90;
    document.getElementById("minute").style.transform = `rotate(${temp2}deg)`;
}


// Set the Seconds-Hand
if(seconds>=1 && seconds<=15){
    temp3 = 360 - seconds * 6;
    document.getElementById("second").style.transform = `rotate(${temp3}deg)`;
}
else if(seconds>=16 && seconds<=60){
    temp3 = seconds * 6 - 90;
    document.getElementById("second").style.transform = `rotate(${temp3}deg)`;
}

// Run the Second-Hand & Minute-Hand
let minuteAngle = temp2;
let secondAngle = temp3;
setInterval(() => {
    secondAngle+=6;
    document.getElementById("second").style.transform = `rotate(${secondAngle}deg)`;
    minuteAngle+=0.1;
    document.getElementById("minute").style.transform = `rotate(${minuteAngle}deg)`;
}, 1000);