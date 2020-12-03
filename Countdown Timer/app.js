const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// target date
const targetDate = new Date("1 August 2022");

function countdown() {
    const currentDate = new Date();

    const totalSeconds = (targetDate - currentDate) / 1000;  // total number of seconds remaining

    const seconds = Math.floor(totalSeconds % 60); // seconds
    const minutes = Math.floor(totalSeconds / 60) % 60;  // minutes
    const hours = Math.floor(totalSeconds / 3600) % 24;  // hours
    const days = Math.floor(totalSeconds / 3600 / 24);  // days

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

// initial call
countdown();

// setting 1s interval
setInterval(countdown, 1000);
