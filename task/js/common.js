$(function() {

var userChoice = null;


	$(".pokemon").on("click", function() {
		var computerChoice = Math.random();
		$(".battle-ground #userPokemon img").removeClass("active");
		$(".battle-ground #computerPokemon img").removeClass("active");
		$(".show-comp-choice").removeClass("active");
		
		$(".pokeball").addClass("active");
		setTimeout(function() {
			$(".pokeball").removeClass("active");
		},500)

		if ( $(this).hasClass("pokemon-pikachu") ) {
			userChoice = "rock";
			
			$("#userPokemon img").attr("src","img/battle/pikachu.svg");
			$(".pokemon-name-user p").html("Pikachu");
		} else if ( $(this).hasClass("pokemon-jigglypuff") ) {
			userChoice = "paper";
			
			$("#userPokemon img").attr("src","img/battle/jigglypuff.svg");
			$(".pokemon-name-user p").html("Jigglypuff");
		} else {
			userChoice = "scissors";
			
			$("#userPokemon img").attr("src","img/battle/pidgey.svg");
			$(".pokemon-name-user p").html("Pidgey");
		}
		
		console.log(userChoice);
		
		
			if ( computerChoice < 0.33 ) {
			computerChoice = "rock";
			
			$("#computerPokemon img").attr("src","img/battle/pikachu.svg");
			$(".pokemon-name-computer p").html("Pikachu");
		} else if ( computerChoice <= 0.66 ) {
			computerChoice = "paper";
			
			$("#computerPokemon img").attr("src","img/battle/jigglypuff.svg");
			$(".pokemon-name-computer p").html("Jigglypuff");
		} else {
			computerChoice = "scissors";
			
			$("#computerPokemon img").attr("src","img/battle/pidgey.svg");
			$(".pokemon-name-computer p").html("Pidgey");
		}
			setTimeout(function() {
				$(".show-comp-choice").addClass("active");
			}, 500);
			$(".show-user-choice").addClass("active");
		
		
		
		
		
		
		console.log(computerChoice);

		var startBattle = function(choice1, choice2) {
			
				var userWins = function() {
						setTimeout(function(){
							$(".battle-ground #userPokemon img").addClass("active");
						},800);
					}
				
				var compWins = function() {
						setTimeout(function(){
							$(".battle-ground #computerPokemon img").addClass("active");
						},800);
					}

			if ( choice1 === choice2 ) {
				console.log("Tie");

				$(".result-battle p").html("When Pokemons meets each other they start friendship. TIE");
				setTimeout(function(){
					$(".battle-ground #computerPokemon img").addClass("active");
					$(".battle-ground #userPokemon img").addClass("active");
				},800);

			} else if ( choice1 === "paper" ) {
				if (choice2 === "rock") {
					console.log("You win");
					
					$(".result-battle p").html("Jigglypuff charms Pikachu. You WIN");
					userWins();
				} else if ( choice2 === "scissors" ) {
					console.log("You loose");
					
					$(".result-battle p").html("Pidgey beats Jigglypuff. You loose");
					compWins();
					}
			} else if ( choice1 === "rock" ) {
				if (choice2 === "scissors") {
					console.log("You win");
					
					$(".result-battle p").html("Pikachu beats Pidgey. You Win");
					userWins();
				} else if (choice2 === "paper") {
					console.log("You loose");
					
					$(".result-battle p").html("Jigglypuff charms Pikachu. You loose");
					compWins();
				}
			} else if ( choice1 === "scissors") {
				if (choice2 === "paper") {
					console.log("You win");
					
					$(".result-battle p").html("Pidgey beats Jigglypuff. You win");
					userWins();
				} else if ( choice2 === "rock") {
					console.log("You loose");
					
					$(".result-battle p").html("Pikachu beats Pidgey. You loose");
					compWins();
			}
		}

	}

	startBattle(userChoice, computerChoice);

	});
	
	var startAnimations = function() {
		$('.preloader').fadeOut(1000);
	}
	setTimeout(startAnimations,1000);
	
	//Waypoints
	var waypoint1 = new Waypoint({
		element: document.getElementById('developmentScale1'),
		handler: function() {
			for ( i = 1; i < 5; i++) {
				var count = 1 + i;
				var chooseScale = $('#developmentScale1 .fig-' + count);
				
				chooseScale.css("fill", "#e97272");
			}
			$(".step-1 .img-wrap .mask, .step-1 .text-wrap p").addClass('active');
		}, offset: 600
	});
	
	var waypoint2 = new Waypoint({
		element: document.getElementById('developmentScale2'),
		handler: function() {
			for ( i = 1; i < 9; i++) {
				var count = 1 + i;
				var chooseScale = $('#developmentScale2 .fig-' + count);
				
				chooseScale.css("fill", "#e97272");
			}
			$(".step-2 .img-wrap .mask, .step-2 .text-wrap p, .step-2 .floating-image img").addClass('active');
		}, offset: 600
	});
	
		var waypoint3 = new Waypoint({
		element: document.getElementById('developmentScale3'),
		handler: function() {
			for ( i = 1; i < 13; i++) {
				var count = 1 + i;
				var chooseScale = $('#developmentScale3 .fig-' + count);
				
				chooseScale.css("fill", "#e97272");
			}
			$(".step-3 .img-wrap .mask, .step-3 .text-wrap p, .step-3 .floating-image img").addClass('active');
		}, offset: 600
	});
	
	var waypoint4 = new Waypoint({
		element: document.getElementById('developmentScale4'),
		handler: function() {
			for ( i = 1; i < 17; i++) {
				var count = 1 + i;
				var chooseScale = $('#developmentScale4 .fig-' + count);
				
				chooseScale.css("fill", "#e97272");
			}
			$(".step-4 .img-wrap .mask, .step-4 .text-wrap p, .step-4 .floating-image img").addClass('active');
		}, offset: 600
	});

});