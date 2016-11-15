$(document).ready(function() {

	//Global variables
	var wins = 0;
	var losses = 0;
	var gem1 = Math.floor(Math.random()*(12-1+1)+1);
	var gem2 = Math.floor(Math.random()*(12-1+1)+1);
	var gem3 = Math.floor(Math.random()*(12-1+1)+1);
	var gem4 = Math.floor(Math.random()*(12-1+1)+1);
	var gemTotal = 0;


	//Generates random number for User to try to match
	function rando(min,max) {
		return Math.floor(Math.random()*(120-19+1)+19);
	};
		
	//Places random number in html
	$('#randomNumber').text(rando);


	//Inserts scores into html
	$("#wins").text(wins);
	$("#losses").text(losses);


	// resets game
	function gameReset() {
		rando = Math.floor(Math.random()*(120-19+1)+19);
		$('#randomNumber').text(rando);
		gem1 = Math.floor(Math.random()*(12-1+1)+1);
		gem2 = Math.floor(Math.random()*(12-1+1)+1);
		gem3 = Math.floor(Math.random()*(12-1+1)+1);
		gem4 = Math.floor(Math.random()*(12-1+1)+1);
		gemTotal = 0;
		$("#gemTotal").text(gemTotal);
	};


	//Adds wins to wins section
	function champ() {
		alert("Winner!");
		wins++;
		$("#wins").texts(wins);
		gameReset();
	};

	//Adds wins to wins section
	function champ() {
		alert("Loser!");
		wins++;
		$("#losses").texts(losses);
		gameReset();
	};


});





