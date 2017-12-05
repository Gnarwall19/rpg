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
	var isaac = new Hero("Isaac", "images/isaac.png", "#isaac", 100, 5, 3);

	// KIRBY
	var kirby = new Hero("Kirby", "images/kirby.gif", "#kirby", 100, 5, 3);

	// LINK
	var link = new Hero("Link", "images/link.gif", "#link", 100, 5, 3);

	// SUPER MEAT BOY
	var meatBoy = new Hero("Super Meat Boy", "images/meatboy.png", "#meatboy", 100, 5, 3);

	// Create universal variables in an object
	var points = {
		hp: 0,
		attackPower: 0,
		powerUp: 0,
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

		// **TESTING**
		console.log('selected');

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
		var enemyName = '<img id="enemyImage" src="' + char.image + '" alt="' + char.name + '"> <h3>' + char.name + '</h3>';
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
		console.log(points.opponentNow);
		if (points.opponentNow) {
			// Animate Hero
			$("#userImage").animate({ left: "+=600px" }, "fast");
			// PLAY ATTACK SOUND
			$("#userImage").animate({ left: "-=600px" }, "fast");
			$("#enemyImage").delay(500).animate({ left: "-=600px" }, "fast");
			// COUNTER AUDIO
			$("#enemyImage").animate({ left: "+=600px" }, "fast");

			// Calculate enemy's HP and print to page
			points.hp = points.hp - points.counterPower;
			var enemyStats = '<p>HP: ' + points.healthOpponent + '</p><p>Attack Power: ' + points.counterPower + '<p>';
			$("#enemyStats").html(enemyStats);
			// Log enemy HP to console
			console.log('Villian: ' + points.healthOpponent);

			// Calculate user's hp & incremented attack power (powerUp) and print to page
			points.powerUp = points.powerUp + points.attackPower;
			points.healthOpponent = points.healthOpponent - points.powerUp;
			var heroStats = '<p>HP: ' + points.hp + '</p><p>Attack Power: ' + points.powerUp + '</p>';
			$("#userStats").html(heroStats);

			// Print action
			var attackTxt = '<h2>' + name + ' hit for ' + points.powerUp + ' points!\nThe ENEMY countered for ' + points.counterPower + ' points.</h2>'
			$("#attackTxt").html(attackTxt);

			// Kill enemy
			if (points.healthOpponent <= 0) {
				// Increment wins
				points.winCounter++

				// Win game when user hits 3 wins
				if (points.winCounter === 3) {
					// No opponent
					points.opponentNow = false;
					// Win Text
					var attackTxt = '<h2>Congratulations!\nYour enemies have been vanquished!</h2>';
					$("#attackTxt").html(attackTxt);
					// Button Text
					$("#attackButton").text('Play Again?').removeClass("btn-danger").addClass("btn-warning");
					$("#attackButton").click(function () {
						startOver();
					});
					// Still more enemies
				} else {
					// No enemy
					points.opponentNow = false;

					// Next enemy
					var attackTxt = '<h2>KO!\nSelect Your Next Opponent!</h2>';
					$("#attackTxt").html(attackTxt);
				}
				// Clear enemy info
				$("#enemyName").empty();
				$("#enemyStats").empty();

				return;
			}
			// Game Over
			if (points.hp <= 0) {
				// Defeat Text
				var attackTxt = "<h2>You Have Been Defeated...\nGAME OVER" // ADD 'START OVER' LINK
				$("#attackTxt").html(attackTxt);
				/*
				$("#startOverLik").click(function(){
					startOver();
				});
				*/
				$("#attackButton").text('Play Again?').removeClass("btn-danger").addClass("btn-warning");
				$("#attackButton").click(function () {
					startOver();
				});
			}
			// Select an enemy
		} else {
			var attackTxt = '<h2>Select an Opponent</h2>';
			$("#attackTxt").html(attackTxt);
		}
	}

	// New Game
	function startOver() {
		location.reload();
	}

	// =============================
	// BUTTONS!
	// =============================
	$('#isaac').click(function () {
		if (points.selectCounter === 0) {
			userSelect(isaac);

			// **TESTING**
			console.log("you clicked isaac!");
		} else {

			if (points.opponentNow) {
				var attackTxt = '<h2>YOU MUST DEFEAT THE CURRENT ENEMY</h2>';
				$("#attackTxt").html(attackTxt);
			} else {
				opponentSelect(isaac);
			}
		}
	});



	$('#kirby').click(function () {
		if (points.selectCounter === 0) {
			userSelect(kirby);

			// **TESTING**
			console.log("you clicked kirby!");
		} else {

			if (points.opponentNow) {
				var attackTxt = '<h2>YOU MUST DEFEAT THE CURRENT ENEMY</h2>';
				$("#attackTxt").html(attackTxt);
			} else {
				opponentSelect(kirby);
			}
		}
	});


	$('#link').click(function () {
		if (points.selectCounter === 0) {
			userSelect(link);

			// **TESTING**
			console.log("you clicked link!");
		} else {

			if (points.opponentNow) {
				var attackTxt = '<h2>YOU MUST DEFEAT THE CURRENT ENEMY</h2>';
				$("#attackTxt").html(attackTxt);
			} else {
				opponentSelect(link);
			}
		}
	});


	$('#meatboy').click(function () {
		if (points.selectCounter === 0) {
			userSelect(meatBoy);

			// **TESTING**
			console.log("you clicked meatboy!");
		} else {

			if (points.opponentNow) {
				var attackTxt = '<h2>YOU MUST DEFEAT THE CURRENT ENEMY</h2>';
				$("#attackTxt").html(attackTxt);
			} else {
				opponentSelect(meatBoy);
			}
		}
	});


	$("#attackButton").click(function () {

		if (points.winCounter < 3) {
			if (points.selectCounter < 1) {
				var attackTxt = "<h2>Select Your Hero</h2>";
				$("#attackTxt").html(attackTxt);
			} else if (points.selectCounter === 1) {
				var attackTxt = "<h2>Choose Your Enemy</h2>";
				$("#attackTxt").html(attackTxt);
			} else {
				attack();
			}
		}
	})





	// **TESTING**
	console.log(points.selectCounter);

})