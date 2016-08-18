/* 

JavaScript Development - Assignment 5

Countly MVC

The assignment is to make an MVC application used for counting things. Here are the specifications for the application:

It should have three buttons (one for counting up, one for counting down, one for resetting to 0)
It will display the count to the user
If the count goes above 100, the color of the number will be red
If the count goes below 0, the color of the number will be blue

*/

//Model

var countInfo = {
	count: 0,
	greaterThanOneHundred: false,
	lessThanZero: false
}

//View

function renderCount() {
	$('#count').html('');
	var source = $('#count-template').html();
	var template = Handlebars.compile(source);
	$('#count').append(template(countInfo));
	}


// Controller - Where you place the event listeners

function setup() {
	renderCount();

	$('#countUp').on('click', countUp);
	$('#countDown').on('click', countDown);
	$('#reset').on('click', reset);
}

function countUp() {
	countInfo.count += 1;
	if (countInfo.count > 100) {
		countInfo.greaterThanOneHundred = true;
	} else if (countInfo.count >= 0) {
		countInfo.lessThanZero = false;
	} 
	renderCount();
}

function countDown() {
	countInfo.count -= 1;
	if (countInfo.count < 0) {
		countInfo.lessThanZero = true;
	} else if (countInfo.count <= 100) {
		countInfo.greaterThanOneHundred = false;
	} 
	renderCount();
}

function reset() {
	countInfo.count = 0;
	countInfo.greaterThanOneHundred = false;
	countInfo.lessThanZero = false;

	renderCount();
}


$(document).ready(setup);
