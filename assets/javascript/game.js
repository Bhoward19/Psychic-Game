

var correct = 0;
var incorrect = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var PsychicChoice = "";
var userGuess = "";

var alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
			];



var Psychic = function ()  {
	PsychicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

}

var resetGame = function () {
	guessesLeft = 10;
	guessesSoFar = [];
	Psychic();
};







document.onkeyup = function (event)  {

	userGuess = event.key.toLowerCase();

	Psychic();


	if (userGuess == PsychicChoice) {
		correct++;
		alertWin();
	} 
	if (userGuess != PsychicChoice) {
		guessesLeft--;
		guessesSoFar.push(userGuess);
	

	var html = 
		"<p>Guesses Left </p>" +
		"<p>"+ guessesLeft + "</p>" +
		"<p>letters Guessed</p>" + 
		"<p>"+ guessesSoFar + "</p>" +
		"<br>" +
		"<p>Correct </p>" + 
		"<p>"+ correct + "</p>" +
		"<p>Incorrect </p>" + 
		"<p>"+ incorrect + "</p>";

    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
		incorrect++;
		alertLoss();
		}
	}

};

var alertWin =  function() {
	alert("Congratulations I was thinking of " + PsychicChoice + ".");
	resetGame();
};

var alertLoss = function() {
	alert("I am sorry you are incorrect, I was thinking of " + PsychicChoice +".");
	resetGame();
};