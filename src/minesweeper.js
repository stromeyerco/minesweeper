/* Part One Minesweeper Project

// create hard coded blank line for board
const blankLine = "  |   | ";

// text above blank board
console.log("This is what an empty board would look like:");

// display blank board
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

// add hard coded guess + bomb lines to board
const guessLine = "1 |   | ";
const bombLine = "  | B | ";

// text above board with 3 variants
console.log("This is what a board with a guess and a bomb on it would look like:");

// display board with guess, bomb + blank line
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);

*/

// Part Two Minesweeper Project

// print board, each nested array on single line, elements joined by pipe
const printBoard = board => {
	console.log("Current Board:");
	console.log(board[0].join(" | "));
	console.log(board[1].join(" | "));
	console.log(board[2].join(" | "));
}

// board array - three nested arrays with three elemenst each
const board = [
	[" ", " ", " "], 
	[" ", " ", " "], 
	[" ", " ", " "]
]

printBoard(board);

// hard code - changed elements in nested arrays
board [0][1] = "1";
board [2][2] = "B";

printBoard(board);