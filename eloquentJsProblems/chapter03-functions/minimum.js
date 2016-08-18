/*
This is a function min that takes two arguments and returns their minimum.
This exercise can be found at http://eloquentjavascript.net/03_functions.html 
and the following code was written for learning purposes by Phil Olive.
*/ 

//Using console.log to create a function that outputs side effects 

console.log('Using console.log:\n')

function minimum(number1, number2) {
	if (number1 < number2) {
		console.log(number1);
	} else {
		console.log(number2);
	}
}

minimum(0, 10);
// → 0
minimum(0, -10);
// → -10

//Using return to create a pure function

console.log('\nUsing return:\n')


function min(numberOne, numberTwo) {
	if (numberOne < numberTwo) {
		return numberOne;
	} else {
		return numberTwo;
	}
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


