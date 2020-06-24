// 1. Using Temp. Lit to join two strings
function createFullName(firstName, lastName){
	return `${firstName} ${lastName}`;
}
console.log("1. " + createFullName("Kelly", "Jones"));

// 2. Same as 1, but using arrow function
let createFullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("2. " + createFullName2('Lisa', 'Evans'));

// 3a. setTimeoutFunction
setTimeout(function(){alert('Time is up!')},1000);

// 3b. use setInterval, pass askAreWeThereYet into the callback param. pos.
let askAreWeThereYet = () => alert('Are we there yet?');
setInterval(askAreWeThereYet, 2500);

// 4a,4b,4c. Callbacks 

function processSplicedValue(array, index, callback){
	value = array.splice(index, 1);
	callback(value);
}

// 4d. 
let colorsArray = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'purple'];
console.log("\n4d. console output ");
processSplicedValue(colorsArray, 2, console.log );

// 4e.
console.log("\n4e. alert output");
processSplicedValue(colorsArray, 2, alert );

//4f.
console.log("\n4f. alert output)");
processSplicedValue(colorsArray, 2, (value) => {alert(value)});

//4g.
console.log("\n4g. console output");
let capitalizeValue = (value) => { console.log (value.toString().toUpperCase())};
processSplicedValue(colorsArray, 2, capitalizeValue);

