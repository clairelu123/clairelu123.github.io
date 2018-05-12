var numofSquares = 6;
var colors = [];
var pickedColor;
var colorDis = document.getElementById("colorDis");
var squares = document.querySelectorAll(".square");
var messageDis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

var modeButton = document.querySelectorAll(".mode");

init();

function init(){

	setUpModeButton();
	setUpSquares();
	

	resetButton.addEventListener("click", function(){
		reset();
	})

	reset();
}

function setUpModeButton(){
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected")
			modeButton[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? numofSquares = 3: numofSquares = 6;
			reset();
		})
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square and compare
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor + " : " + pickedColor)
			if (clickedColor === pickedColor) {
				messageDis.textContent = "Correct!";
				resetButton.textContent = "Play Again";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				console.log("End");
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDis.textContent = "Try Again";
			}
		})
	}	
}

function reset(){
	colors = generateRandomColor(numofSquares);
	pickedColor = pickColor();
	colorDis.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDis.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for (var i = 0; i < squares.length; i++) {
	// add initial colors
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}

	}
}

function changeColor(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

// random correct color
function pickColor(){
	var randomc = Math.floor(Math.random() * colors.length);
	return colors[randomc];
}

function generateRandomColor(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}