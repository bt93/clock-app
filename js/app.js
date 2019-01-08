let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Gets current date and formats
let d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()];
let hr = d.getHours()
console.log(month, day, hr);