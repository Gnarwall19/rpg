$(document).ready(function () {

	var Hero = function (name, image, divid, health, attack, counter) {
		this.name = name;
		this.image = image;
		this.divid = divid;
		this.health = health;
		this.attack = attack;
		this.counter = counter;
	};

	// ISAAC
	var isaac = new Hero("Isaac", "images/isaac.png", "#isaac", 10, 5, 3);

	// KIRBY
	var kirby = new Hero("Kirby", "images/kirby.gif", "#kirby", 10, 5, 3);

	// LINK
	var link = new Hero("Link", "images/link.gif", "#link", 10, 5, 3);

	// SUPER MEAT BOY
	var meatBoy = new Hero("Super Meat Boy", "images/meatboy.png", "#meatboy", 10, 5, 3);

	// Create universal variables in an object
	var points = {
		hp: 0,
		attackPower: 0,
		newPower: 0,
		healthOpponent: 0,
		counterPower: 0,
		selectCounter: 0,
		winCounter: 0,
		opponentNow: false
	};


	// Random Number Generator
	function random(min, max) {
		return Math.floor(Math.ramdom() * (max - min + 1) + min);
	};


	// Choose Your Character
	function userSelect(char) {

		// Hide selection from menu
		$(char.divid).hide();

		// Set points object equal to hero selection and populate HTML
		points.hp = char.health;
		points.attackPower = char.attack;

		// Dynamically update HTML
		var userHeroName = '<img id="userImage" src="' + char.image + '" alt="' + char.name + '"> <h3>' + char.name + '</h3>';
		$("#userName").html(userHeroName);
		var heroStats = '<p>HP: ' + points.hp + '</p> <p>Attack Power: ' + points.attackPower + '</p>';
		$("#userStats").html(heroStats);

		// Increment select counter
		points.selectCounter++;

	};

	// Choose Your Opponent
	function opponentSelect(char) {

		// Hide selection from menu
		$(char.divid).hide();

		// Set points object equal to hero selection and populate HTML
		points.healthOpponent = char.health;
		points.counterPower = char.attack;

		// Dymanically update HTML
		var enemyName = '<img id="enemyImage: src="' + char.image + '" alt="' + char.name + '"> <h3>' + char.name + '</h3>';
		$("#enemyName").html(enemyName);
		var enemyStats = '<p>HP: ' + points.healthOpponent + '</p> <p>Attack Power: ' + points.counterPower + '</p>';
		$("#enemyStats").html(enemyStats);

		// Registers selected opponent
		points.opponentNow = true;

		// Increment select counter
		points.selectCounter++;

	};


	// Attack!
	function attack(char) {

	}



})