 //refrence for div id clock
 const display = document.getElementById("clock");
 const audio = new Audio ("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
audio.loop=true;
let alarmTime = null;
let alarmTimeout = null;



//displaying date 
function updateTime(){
const date = new Date();

const hour = formatTime(date.getHours());
const minutes = formatTime(date.getMinutes());
const seconds = formatTime(date.getSeconds());


//concatinatin all the variables 
display.innerText = hour + " : " + minutes + " : " + seconds;
}

function formatTime(time){
    if(time < 10){
        return "0" + time;
    }
        return time;
    
}

setInterval(updateTime,1000);

function setAlarmTime(value){
    alarmTime = value;
}
function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);
        if(timeToAlarm > current ){
            const timeout = timeToAlarm.getTime()- current.getTime();
            alarmTimeout = setTimeout(function(){
                audio.play();
            }, timeout);
            alert("Alarm is set!");
        }
    }
}

//clearing the alarm
function clearAlarm(){
    audio.pause();
    
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert("alarm clear");
    }
}
