// Months and days for easy access
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Gets current date and formats
let d = new Date();
let date = d.getDate();
let month = months[d.getMonth()];
let day = days[d.getDay()];
let year = d.getFullYear();
let hr = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();

let isAmPm = "AM";
if (hr > 12) {
	hr -= 12;
	isAmPm = "PM";
}

// Checks if hour is below 10 and adds zero
if (hr < 10) {
	hr = '0' + hr;
}
// Does same but with minutes
if (min < 10) {
	min = '0' + min;
}
// Does same but with seconds
if (sec < 10) {
	sec = '0' + sec;
}

console.log(day, month, date, year, hr, min, sec, isAmPm);