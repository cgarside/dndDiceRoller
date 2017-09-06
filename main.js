window.onload = function() {
	//Diceroll function
	function diceRoll(min, max) {
		var min = Math.floor(min);
		var max = Math.ceil(max);
		var roll = Math.floor(Math.random() * (max - min + 1)) + min;
		document.getElementById("answer").innerHTML = roll;
		console.log(roll);
	};
	//d4
	document.getElementById("d4").onclick = function() {
		diceRoll(1, 4);
	};
	//d6 
	document.getElementById("d6").onclick = function() {
		diceRoll(1, 6);
	};
	//d8
	document.getElementById("d8").onclick = function() {
		diceRoll(1, 8);
	};
	//d10
	document.getElementById("d10").onclick = function() {
		diceRoll(1, 10);
	};
	//d12
	document.getElementById("d12").onclick = function() {
		diceRoll(1, 12);
	};
	//d20
	document.getElementById("d20").onclick = function() {
		diceRoll(1, 20);
	};
}