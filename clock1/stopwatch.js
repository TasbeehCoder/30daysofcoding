//----------STOP WATCH JAVASCRIPT HERE----------//


// Add this section to your existing JavaScript file

// Stopwatch functionality
let stopwatchActive = false;
let stopwatchInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Stopwatch elements
const stopwatchHoursElem = document.getElementById("stopwatch_hours");
const stopwatchMinutesElem = document.getElementById("stopwatch_minutes");
const stopwatchSecondsElem = document.getElementById("stopwatch_seconds");

// Stopwatch buttons
const startBtn = document.getElementById("start_btn");
const stopBtn = document.getElementById("stop_btn");
const resetBtn = document.getElementById("reset_btn");

function startStopwatch() {
    if (!stopwatchActive) {
        stopwatchActive = true;
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
}

function stopStopwatch() {
    stopwatchActive = false;
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopwatchActive = false;
    clearInterval(stopwatchInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateStopwatchDisplay();
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    stopwatchSecondsElem.textContent = formatTime(seconds);
    stopwatchMinutesElem.textContent = formatTime(minutes);
    stopwatchHoursElem.textContent = formatTime(hours);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Event listeners for Stopwatch buttons
startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
