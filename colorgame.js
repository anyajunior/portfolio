var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
		// mode buttons event listeners
	for(var i = 0; i <modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			if (this.textContent === "Easy") {
				numSquares = 3
			} else {
				numSquares = 6;
			}
			reset();
		})
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++) {
	// add event listeners
	squares[i].addEventListener("click", function(){
		// grab color of the clicked square 
		var clickedColor = this.style.backgroundColor;
		// and compare to the pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	// pick a new random color
	pickedColor = pickColor();
	// change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor; 
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change the colors of the squares
	for(var i = 0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i<squares.length;i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i<squares.length;i++) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		}
// });

resetButton.addEventListener("click", function(){
	reset();
	// // generate new colors
	// colors = generateRandomColors(numSquares);
	// // pick a new random color
	// pickedColor = pickColor();
	// // change colorDisplay to match pickedColor
	// colorDisplay.textContent = pickedColor; 
	// messageDisplay.textContent = "";
	// // change the colors of the squares
	// for(var i = 0; i <squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
	// this.textContent = "New Colors";
})


/* LOGIC behind choosing the colors:

when we click on a square, runs some code: 
which color is the square that we clicked on,
we compare it with the pickedColor.
If it's different, 
change the background color of this square to the color of the background
if they are the same = the player has won.*/

// goes through the squares


function changeColors(color){
	// loop thru all squares
	for(var i = 0; i < squares.length; i++) {
		// change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for (var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor())
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256)
	// pick a green 0 to 255
	var g = Math.floor(Math.random() * 256)
	// pick a blue 0 to 255
	var b = Math.floor(Math.random() * 256)
	// "rgb (r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}