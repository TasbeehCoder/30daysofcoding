
// CLOCK FUNCTIONALITY

// References to HTML elements
const hourHand = document.querySelector("#hour__stick");
const minutesHand = document.querySelector("#minutes__stick");


// Function to move clock hands based on current time

const moveClockHands = () => {
    // Create a date object to get current time
    const currentDate = new Date();

    // Calculate rotation degrees for hour and minute hands

    let hourRotation = currentDate.getHours() * 30; // 12 hours make 360deg => 1 hour makes 30 Degre

    let minuteRotation = currentDate.getMinutes() * 6; // 60 minutes make 360 degree => 1 min make 6 degree

    //User rotateZ() value to create an illusion of rotation
    // Apply rotation to hands using CSS transform property
    hourHand.style.transform = `rotateZ(${hourRotation + minuteRotation / 12}deg)`;
    minutesHand.style.transform = `rotateZ(${minuteRotation}deg)`;


}

// call funtion here, Set interval to update clock hands every second
setInterval(moveClockHands, 1000);

// CLOCK DATA DISPLAY

// REFERENCES TO HTML elements
const timeHour = document.querySelector("#hour");
const timeMinutes = document.querySelector("#minutes");
const timeAmPm = document.querySelector("#ampm");
const dateDay = document.querySelector("#day");
const dateMonth = document.querySelector("#month");
const dateCurrentDate = document.querySelector("#current-date");
const dateYear = document.querySelector("#year");

// Function to display current day, date, and time
const displayClockData = () => {
    // create a date object to get current date and time
    const currentDate = new Date();

    //Array to store month and day names
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // A DAY array that stores names of all the days
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // Extract relevant information from the date object
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();

    let ampm, dayOfWeek = currentDate.getDay(), month = currentDate.getMonth(), currentDateOfMonth = currentDate.getDate(), year = currentDate.getFullYear();

    /* show time */
    // Determine whether it's AM or PM

    if (currentHour >= 12) {
        currentHour -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    //Convert 0 AM to 12 Am
    if (currentHour === 0) { currentHour = 12 };

    // Add leading Zeros to hour and minutes if less than 10
    if (currentHour < 10) { currentHour = `0${currentHour}` };
    if (currentMinute < 10) { currentMinute = `0${currentMinute}` };

    // Display time and date using textContent
    timeHour.textContent = `${currentHour}:`;
    timeMinutes.textContent = `${currentMinute}`;
    timeAmPm.textContent = `${ampm}`;
    dateDay.textContent = `${days[dayOfWeek]}`;
    dateMonth.textContent = `${months[month]}`;
    dateCurrentDate.textContent = `${currentDateOfMonth},`;
    dateYear.textContent = `${year}`;
}

// Set interval to update clock data every second
setInterval(displayClockData, 1000);


// THEME CHANGE FUNCTIONALITY

// References to HTML elements
const themeBtn = document.querySelector("#theme-btn");
const main = document.querySelector("#main");


// Function to change color theme and icon on button click
const toggleTheme = () => {
    main.classList.toggle("dark__theme")

    //change icon by adding change__icon class to theme btn
    themeBtn.classList.toggle("change__icon");

}
themeBtn.addEventListener("click", toggleTheme)

