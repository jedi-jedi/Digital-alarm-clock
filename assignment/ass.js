const secondsEl = document.getElementById("seconds");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const dateEl = document.getElementById("date");
const dt = new Date()
const inputEl = document.getElementById("input")
const alarmLabelEl = document.getElementById("alarmLabel");
let alarmStart = false; 
let wasRinging = false;
const audio = new Audio("./audio/mixkit-rooster-crowing-in-the-morning-2462.wav")
let snuze;


let hours = dt.getHours();
let minutes = dt.getMinutes();
let seconds = dt.getSeconds();

const date = {weekday: 'long', month: 'long', day: 'numeric'};
dateEl.textContent = dt.toLocaleDateString(undefined, date);



// hoursEl.textContent = hours < 10? `0${hours}`:hours;
// minutesEl.textContent = dt.getMinutes();




let interval = setInterval(()=>{
    //console.log("tick");
    
    const dt =  new Date()

    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();

    secondsEl.textContent = seconds < 10? `0${seconds}`:seconds;
    hoursEl.textContent = hours < 10? `0${hours}`:hours;
    minutesEl.textContent = minutes < 10? `0${minutes}`:minutes;
    alarm(dt)
}, 1000)


const alarm = (dt)=>{
    //console.log('hekko');
    
    if (!dt) return;
   
    audio.loop = true;
    const inputValue =inputEl.value;
    //const dt = new Date()
    if (inputValue) {
        const[alarmHour, alarmMinute]=inputValue.split(":").map(Number)

        if (dt.getHours() === alarmHour && dt.getMinutes() === alarmMinute && !alarmStart && !wasRinging) {
            //alert("stop")
            audio.play()
            alarmStart = true
            wasRinging = true
        } else if(wasRinging && dt.getHours() !== alarmHour || dt.getMinutes() !== alarmMinute) {
            stop();
            //audio.pause();
            // audio.currentTime = 0;
            // alarmStart = false;

            //alert("you missed your alarm at")
        }

        // if (dt.getHours() !== alarmHour || dt.getMinutes() !== alarmMinute) {
        //     audio.pause();
        //     audio.currentTime = 0;
        //     alarmStart = false;
        //     alert("you missed your alarm at")
        // }
    }
    //console.log("alarm caled");
    
}

const stop =()=>{
    if(alarmStart){
         
        audio.pause();
        audio.loop = false;
        audio.currentTime = 0;
        alarmStart = false;
        alert("your alarm has stopped at")
        wasRinging = true;

    }
   

}


// const snooze =()=>{
//     console.log("hhhh");
    
//     audio.pause();
//     audio.currentTime = 0;

//     const dt = new Date();
//     dt.setMinutes(dt.getMinutes() + 1);

//     snuze = dt;
//     alarmStart = false

//     alert("snooze for 1min");
// }

