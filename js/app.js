// Months and days for easy access
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getTime() {
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
	let currentTime;
	let formatedTime;

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

	currentTime = `<h1>${day}, ${month} ${date}, ${year}</h1><h2>${hr}:${min}:${sec} ${isAmPm}</h2>`;
	return currentTime;
}

let time = document.getElementById('time');
let image = document.getElementById('img');
// Calls curent time
formatedTime = getTime();
time.innerHTML = formatedTime;

// Recals getTime() every .5 seconds
setInterval(function() {
	formatedTime = getTime();
	time.innerHTML = formatedTime;
},100);

fetch(`https://api.unsplash.com/photos/random`, {
    headers: {
        		Authorization: 'Client-ID 37ee3e9dba8dbfa5cc22fd5c80f872d5fda634ed70fc538f3755917fc719c8e4'
		    }
		})
		.then(response => response.json())
		.then(addImage)
		.catch(e => requestError(e, 'image'));

function addImage(data) {
	let htmlContent = `<img src="${data.urls.small}" alt="${data.description}"></img>`;
	image.innerHTML = htmlContent;
}