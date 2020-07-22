//console.log("user name print welcome clock dark mode using toggle method");
const name=prompt("Enter your name",'Anonymous');

const title=document.getElementById("heading");
title.innerText+=`Welcome to this Page ${name}`;

const ctime=document.getElementById('time');
function clock()
{
    let date=new Date();
    let time=date.toLocaleTimeString();
     ctime.innerText=time;
}
setInterval(clock,1000);


function change()
{
    let el=document.body;
    el.classList.toggle('dark-mode');
}