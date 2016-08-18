// bottles.js is a program written by Phil Olive to 
// display the lyrics to the song 99 Bottles of Beer 
// (http://www.99-bottles-of-beer.net/lyrics.html)
// using a for loop, a while loop, and arrays.

// Version 1: For Loop

var bottles = 99;
var bottlesLineTwo = bottles - 1;
var bottlesNoMore = 'No more';
var refrainPartOnePlural = ' bottles of beer on the wall, ';
var refrainPartOneSingular = ' bottle of beer on the wall, ';
var refrainPartFourPlural = ' bottles of beer on the wall.';
var refrainPartFourSingular = ' bottle of beer on the wall.';
var refrainPartTwoPlural = ' bottles of beer.';
var refrainPartTwoSingular = ' bottle of beer.';
var refrainPartThree = 'Take one down and pass it around, ';
var closingCouplet = 'No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.';

for (var bottles = 99; bottles >= 0; bottles--) {
	if (bottles>=3) {
		console.log(bottles + refrainPartOnePlural + 
			bottles + refrainPartTwoPlural + '\n' + 
			refrainPartThree + (bottles - 1) + refrainPartFourPlural + '\n');
	} else if (bottles === 2) {
		console.log(bottles + refrainPartOnePlural +
			bottles + refrainPartTwoPlural + '\n' +
			refrainPartThree + (bottles - 1) + refrainPartFourSingular + '\n');
	} else if (bottles === 1) {
		console.log(bottles + refrainPartOneSingular +
			bottles + refrainPartTwoSingular + '\n' +
			refrainPartThree + bottlesNoMore + refrainPartFourPlural + '\n');
	} else if (bottles === 0) {
		console.log(closingCouplet);
	} else {
		console.log('Abandon Ship!');
	}
}

