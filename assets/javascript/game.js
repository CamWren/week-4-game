$(document).ready(function(){

	var randomNumber = 0
	var wins = 0;
	var losses = 0;
	var gem1 = 0;
	var gem2 = 0;
	var gem3 = 0;
	var gem4 = 0;
	var gemTotal = 0;



	function rando(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	} 
		/*Chooses a random number between 19 and 120 to be
		displayed at the beginning of a game*/

		//ask why the hell that works

	$('#randomNumber').text(rando);


	function gameReset() {
	gem1 = 0;
	gem2 = 0;
	gem3 = 0;
	gem4 = 0;
	$('#gemTotal').text(0);
	};



	function scoreCheck() {
		if (gemTotal === rando) {
			wins++;
			$('#wins').text(wins);
			gameReset();
		};

		if (gemTotal > rando) {
			losses++;
			$('#losses').text(losses);
			gameReset();
		};
	};


	//Left off at start game function


});





