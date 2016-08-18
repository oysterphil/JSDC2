// This is a script written by Phil Olive
// that generates random addresses when ran.

var addressNumbers = ['1352 ', '2452 ', '3342 ', '4658 ', '5986 '];
var addressStreetNames = ['Rodeo ', 'Downing ', 'Tunlaw '];
var addressStreetTypes = ['Pl. ', 'St. ', 'Ln. ', 'Ct. ', 'Dr. '];
var addressQuadrants = ['\n', 'NW\n', 'NE\n', 'SE\n', 'SW\n'];
var cities = ['Washington, ', 'Alexandria, ', 'Baltimore, ', 'Orlando ', 'Houston '];
var nonQuadrantCities = ['Alexandria, ', 'Baltimore, ', 'Orlando ', 'Houston '];
var states = ['DC ', 'MD ', 'VA ', 'FL ', 'TX '];
var nonQuadrantStates = ['MD ', 'VA ', 'FL ', 'TX '];
var zipCodes = ['20001', '20002', '20003', '20004', '20005'];
var simpleRandomAddress = addressNumbers[Math.floor(Math.random() * addressNumbers.length)] + 
	addressStreetNames[Math.floor(Math.random() * addressStreetNames.length)] + 
	addressStreetTypes[Math.floor(Math.random() * addressStreetTypes.length)] +
	addressQuadrants [Math.floor(Math.random() * addressQuadrants.length)] + 
	cities[Math.floor(Math.random() * cities.length)] +
	states[Math.floor(Math.random() * states.length)] +
	zipCodes [Math.floor(Math.random() * zipCodes.length)];;
var newSimpleRandomAddress = addressNumbers[Math.floor(Math.random() * addressNumbers.length)] + 
	addressStreetNames[Math.floor(Math.random() * addressStreetNames.length)] + 
	addressStreetTypes[Math.floor(Math.random() * addressStreetTypes.length)] +
	addressQuadrants [Math.floor(Math.random() * addressQuadrants.length)] + 
	cities[Math.floor(Math.random() * cities.length)] +
	states[Math.floor(Math.random() * states.length)] +
	zipCodes [Math.floor(Math.random() * zipCodes.length)];;
var randomAddressPartOne = addressNumbers[Math.floor(Math.random() * addressNumbers.length)] + 
	addressStreetNames[Math.floor(Math.random() * addressStreetNames.length)] + 
	addressStreetTypes[Math.floor(Math.random() * addressStreetTypes.length)] + '\n';
var randomAddressPartTwo = 	nonQuadrantCities[Math.floor(Math.random() * nonQuadrantCities.length)] +
	nonQuadrantStates[Math.floor(Math.random() * nonQuadrantStates.length)] +
	zipCodes [Math.floor(Math.random() * zipCodes.length)];;
var somewhatSmartRandomAddress;

console.log('\nFor a simple random address:\n' + simpleRandomAddress + '\n\n' + 
	'For a (somewhat) smart random address that will not assign a quadrant to a city other than DC: \n');

if (newSimpleRandomAddress.includes('Washington') && 
	newSimpleRandomAddress.includes('NW' || 'NE' || 'SE' || 'SW') &&
	newSimpleRandomAddress.includes('DC')) {
	console.log(newSimpleRandomAddress);
} else {
	somewhatSmartRandomAddress = randomAddressPartOne + randomAddressPartTwo;
	console.log(somewhatSmartRandomAddress);
}



