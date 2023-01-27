// Set the timestamp we're counting down to
var countDownDate = 1550376000000;
var daysElement = document.getElementById('days');
var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');

// Update the count down every 1 second
setInterval(function() {
    // Get current date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    daysElement.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursElement.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesElement.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsElement.innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
