// Months and days for easy access
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let time = document.getElementById('time');
let image = document.getElementById('img');
let hourInput = document.getElementById('hour-input');
let minuteInput = document.getElementById('minute-input');
let amPmInput = document.getElementById('am-pm');
let inputButton = document.getElementById('input-button');
let audio = document.getElementById('audiotag');
let makeInterval;

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

	if (hr === 12) {
		isAmPm = "PM";
	}

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

// Calls curent time
formatedTime = getTime();
time.innerHTML = formatedTime;

// Recals getTime() every .5 seconds
setInterval(function() {
	formatedTime = getTime();
	time.innerHTML = formatedTime;
},50);

function makeAlarm() {
	// loops through hour and minutes to make new options
	for (let i = 1; i < 13; i++) {
		if (i < 10) {
			i = '0' + i;
		}
		let hourNode = document.createElement('option');
		let hourTextNode = document.createTextNode(i);
		hourNode.appendChild(hourTextNode);
		hourNode.setAttribute('value', i)
		hourInput.appendChild(hourNode);
	}

	for (let x = 0; x < 61; x++) {
		if (x < 10) {
			x = '0' + x;
		}
		let minuteNode = document.createElement('option');
		let minuteTextNode = document.createTextNode(x);
		minuteNode.appendChild(minuteTextNode);
		minuteNode.setAttribute('value', x)
		minuteInput.appendChild(minuteNode);
	}
}

makeAlarm();

function setClock() {
	let date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let chosenHour;
	let chosenMin;
	
	chosenHour = parseInt(hourInput.value);
	chosenMin = parseInt(minuteInput.value);


	if (amPmInput.value === 'PM') {
		chosenHour += 12;
	}

	chosenHour = chosenHour.toString();
	chosenMin = chosenMin.toString();

	if (chosenHour < 10) {
		chosenHour = '0' + chosenHour;
	}

	if (chosenMin < 10) {
		chosenMin = '0' + chosenMin;
	}
	
	
	if (chosenHour == hour && chosenMin == minutes) {
		console.log('RING');
		audio.play();

		clearInterval(makeInterval);
		return null;
	}
}

inputButton.addEventListener('click', function() {
	setClock();
	makeInterval = setInterval(setClock, 50);
});


(function(){
	fetch(`https://api.unsplash.com/photos/random`, {
	    headers: {
	        		Authorization: 'Client-ID 37ee3e9dba8dbfa5cc22fd5c80f872d5fda634ed70fc538f3755917fc719c8e4'
			    }
			})
			.then(response => response.json())
			.then(addImage)
			.catch(e => requestError(e, 'image'));

	function addImage(data) {
		let htmlContent = `<figure>
		<img src="${data.urls.small}" alt="${data.description}"></img>
		<figcaption>Photo by ${data.user.name}.</figcaption>
		</figure>`;
		image.innerHTML = htmlContent;
	}
})();