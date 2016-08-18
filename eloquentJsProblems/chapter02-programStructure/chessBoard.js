
console.log(' # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n');

var size = 8;
var chessBoard = '';

for (i = 0; i < size; i ++) {
	for (n = 0; n < size; n ++) {
		if ((i + n) % 2 === 0) {
			chessBoard += ' ';
		} else {
			chessBoard += '#';
		}
	}
	chessBoard += '\n';
}

console.log(chessBoard);