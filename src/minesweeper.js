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