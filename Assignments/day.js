//  BONUS: What day? (day.js)
//  Write a switch statement to log to the console the 
//  appropriate day name for a given number.
//    0: Sunday
//    1: Monday
//    2: Tuesday
//    3: Wednesday
//    4: Thursday
//    5: Friday
//    6: Saturday
//  Write a second switch statement to log 'Weekday' or 
//  'Weekend' based on a given number. Use fall-through.

var Sunday = '0';
var Monday = '1';
var Tuesday = '2';
var Wednesday = '3';
var Thursday = '4';
var Friday = '5';
var Saturday = '6';
var day;

switch (day = 4) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Select a number between 0 and 6.");
}

switch (day) {
	case 0:
	case 6:
		console.log('Weekend');
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		console.log('Weekday');
}