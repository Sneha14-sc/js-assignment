let output = document.getElementById('stopwatch');
let min = prompt("Enter minutes:");
let sec = prompt("Enter seconds:");
let ms = prompt("Enter millisecond:");

function timer() {
    ms++;
    if(ms >= 100){
        sec++
        ms = 0
    }
    if(sec === 60){
        min++
        sec = 0
    }
    if(min === 60){
        ms, sec, min = 0;
    }
    let milli = ms < 10 ? `0`+ ms : ms;
    let seconds = sec < 10 ? `0`+ sec : sec;
    let minute = min < 10 ? `0` + min : min;

    let timer= `${minute}:${seconds}:${milli}`;
    output.innerHTML =timer;
};
//Start timer
function start(){
 time = setInterval(timer,10);
}
//stop timer
function stop(){
    clearInterval(time)
}
//reset timer
function clear(){
    ms = 0;
    sec = 0;
    min = 0;

    output.innerHTML = `00:00:00`
}
const startBtn = document.getElementById('startBtn');
const stopBtn =  document.getElementById('stopBtn');
const clrBtn = document.getElementById('clrBtn');

startBtn.addEventListener('click',start,false);
stopBtn.addEventListener('click',stop,false);
resetBtn.addEventListener('click',clear,false);