"use strict";
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getTime() {
    const currentTime = new Date();
    var hours = currentTime.getHours().toString();
    if (hours.length == 1)
        hours = "0" + hours;
    var minutes = currentTime.getMinutes().toString();
    if (minutes.length == 1)
        minutes = "0" + minutes;
    const timeString = `${hours}:${minutes}`;
    return timeString;
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
