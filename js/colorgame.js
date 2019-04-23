/**
 * Created by Karan on 4/19/2019.
 */
//INITIALIZATION
var colorDisplay = document.getElementById("rgb");
var numofSquares = 6;
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#newColors");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var colors = newArray();
var pickedColor = pickColor();
var msg = document.querySelector("#message");


hardButton.style.backgroundColor = '#3277af';
hardButton.style.color = 'white';

//When NEWCOLORS is clicked
resetButton.addEventListener("click", function () {

    msg.textContent = "";
    resetButton.textContent = "NEW COLORS";
    colors = newArray();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i =0; i<colors.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

easyButton.addEventListener("click", function () {
    // WHEN easy is clicked
    while(hardButton.classList.contains("selected")){
        hardButton.classList.remove("selected");
    }
    easyButton.classList.add("selected");
    easyMode();
    numofSquares = 3;
    msg.textContent = "";
    resetButton.textContent = "NEW COLORS";
    colors = newArray();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i =0; i<numofSquares;i++){
        squares[i].style.backgroundColor = colors[i];
    }

     hardButton.style.backgroundColor = null;
     hardButton.style.color = null;

});


hardButton.addEventListener("click", function () {
    //WHEN HARD is clicked
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");

    numofSquares = 6;
    msg.textContent = "";
    resetButton.textContent = "NEW COLORS";
    colors = newArray();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();
    for(var i =0; i<numofSquares;i++){
        squares[i].style.backgroundColor = colors[i];
    }

});

colorDisplay.textContent = pickedColor.toUpperCase();

//MAIN
for(var i =0; i<colors.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].classList.add("fade-in");
    squares[i].addEventListener("click", function () {
        var colorClicked = this.style.backgroundColor;
        console.log(colorClicked +" color picked: "+ pickedColor);
        if(pickedColor === colorClicked){
            // change the colors of all the squares to colorClicked
            colorAll(colorClicked);
        }
        else {
            this.style.transition = 'ease-out 1s';
            this.style.backgroundColor = '#2e2e2e';
        }
    })
}


//color all the square this color
function colorAll(color) {
    //$("#colors div").fadeIn(1000);

    for(var i=0; i < numofSquares; i++){
        squares[i].style.backgroundColor = color;

    }
    msg.textContent = "Correct!";
    resetButton.textContent = "PLAY AGAIN?"
}


function pickColor() {
    // picks a random color from the colors[]
    var rand = Math.floor(Math.random() * numofSquares);
    var color = colors[rand];
    return color;
}

// returns a new array of colors
function newArray() {
    var result = [];
    for(var i =0; i<numofSquares;i++){
        var color = randomRGB();
        result.push(color);
        console.log(result[i].toString());
    }
    return result;
}

//This function returns a random rgb color in the form of a string
function randomRGB() {
    var result = "rgb(";
    for (var i =0; i < 3; i++){
        var temp = Math.floor(Math.random() * 256);
        result = result.concat("",temp.toString());
        if(i < 2){
            result = result.concat(","," ");
        }
    }
    result = result.concat(")");
    return result;
}


function easyMode() {
    //Fadeout the bottom 3 square
    var cell4 = document.getElementById("s4");
    var cell5 = document.querySelector("#s5");
    var cell6 = document.querySelector("#s6");
    cell4.style.backgroundColor = '#2e2e2e';
    cell5.style.backgroundColor = '#2e2e2e';
    cell6.style.backgroundColor = '#2e2e2e';

}
