// ------------------- DIGITAL CLOCK -------------------
// This code updates the digital clock every second (1000 ms)
setInterval(() => {
    // Get current time as a formatted string (e.g., "10:30:25 AM")
    let time = new Date().toLocaleTimeString();
    // Display the time inside an element with id "time"
    document.getElementById("time").textContent = time;
}, 1000);

// ------------------- STOPWATCH -------------------
let stopwatchInterval;    // Stores the interval ID for the stopwatch
let stopwatchSeconds = 0; // Keeps track of elapsed time in seconds

// Function to start the stopwatch
const startStopWatch = () => {
    if (stopwatchInterval) return; // Avoid starting multiple intervals
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;        // Increment seconds
        displayStopWatch();       // Update UI
    }, 1000);
}

// Function to stop/pause the stopwatch
const stopStopWatch = () => {
    clearInterval(stopwatchInterval); // Stop interval
    stopwatchInterval = null;         // Reset interval ID
}

// Function to reset the stopwatch to 0
const resetStopwatch = () => {
    clearInterval(stopwatchInterval); // Stop interval if running
    stopwatchInterval = null;
    stopwatchSeconds = 0;             // Reset time
    displayStopWatch();               // Update display to 00:00:00
}

// Function to update stopwatch display
const displayStopWatch = () => {
    // Convert total seconds into hours, minutes, and seconds
    let hours = Math.floor(stopwatchSeconds / 3600);
    let minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    let seconds = stopwatchSeconds % 60;
    let Miliseconds = (stopwatchSeconds * 1000) % 1000; // Not displayed, but can be used

    // Display time in HH:MM:SS format, padded with 0s if needed
    document.getElementById("stopwatch").textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ------------------- TIMER -------------------
let timerInterval;        // Stores the interval ID for the timer
let totalTimerSeconds = 0; // Total countdown time in seconds

// Function to start the timer
function startTimer() {
    // Get input values for minutes and seconds from user
    const min = parseInt(document.getElementById('timer-min').value) || 0;
    const sec = parseInt(document.getElementById('timer-sec').value) || 0;
    totalTimerSeconds = min * 60 + sec; // Convert to total seconds

    if (timerInterval) return; // Don't start another interval if one is running

    displayTimer(); // Show initial time

    // Start countdown interval every second
    timerInterval = setInterval(() => {
        if (totalTimerSeconds <= 0) {
            // Time is up: stop the timer and alert the user
            clearInterval(timerInterval);
            timerInterval = null;
            alert("⏰ Time's up!");
        } else {
            // Decrease time and update display
            totalTimerSeconds--;
            displayTimer();
        }
    }, 1000);
}

// Function to reset/stop the timer
function resetTimer() {
    clearInterval(timerInterval); // Stop the timer if running
    timerInterval = null;
    totalTimerSeconds = 0;        // Reset time
    displayTimer();               // Show 00:00
}

// Function to show the countdown timer on screen
function displayTimer() {
    // Convert total seconds to MM:SS
    let mins = Math.floor(totalTimerSeconds / 60);
    let secs = totalTimerSeconds % 60;
    // Display formatted time
    document.getElementById('timer-display').textContent =
        `${pad(mins)}:${pad(secs)}`;
}

// Helper function to pad single digits with 0
function pad(n) {
    return n < 10 ? '0' + n : n;
}
