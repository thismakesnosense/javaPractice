var Hour = document.querySelector(".Hour");
var Minute = document.querySelector(".Minute");
var Second = document.querySelector(".Second");

function setDate(){
const now = new Date();
const Seconds = now.getSeconds();
const SecondsDegree = (Seconds / 60) * 360 + 90;

Second.style.transform = `rotate(${SecondsDegree}deg)`;

const Hours = now.getHours();
const HoursDegree = (Hours / 12) * 360 + 90;

Hour.style.transform = `rotate(${HoursDegree}deg)`;

const Minutes = now.getMinutes();
const MinutesDegree = (Minutes / 60) * 360 + 90;

Minute.style.transform = `rotate(${MinutesDegree}deg)`;

};

setInterval(setDate, 1000);