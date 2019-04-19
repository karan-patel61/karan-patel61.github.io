/**
 * Created by Karan on 4/17/2019.
 */
//when turn = true mark an X and when turn = false mark an O
var turn = true;
var inGame = true;
var num = 0;
var cell = document.querySelector("td");
var result = document.getElementById("status");

function checkWinner() {
    var c1 = document.getElementById("C1");
    var c2 = document.getElementById("C2");
    var c3 = document.getElementById("C3");
    var c4 = document.getElementById("C4");
    var c5 = document.getElementById("C5");
    var c6 = document.getElementById("C6");
    var c7 = document.getElementById("C7");
    var c8 = document.getElementById("C8");
    var c9 = document.getElementById("C9");
    if ((c1.textContent === c2.textContent && c2.textContent === c3.textContent)||
        (c1.textContent === c4.textContent && c4.textContent === c7.textContent)||
        (c1.textContent === c5.textContent && c5.textContent === c9.textContent)||
        (c4.textContent === c5.textContent && c5.textContent === c6.textContent)||
        (c7.textContent === c8.textContent && c8.textContent === c9.textContent)||
        (c2.textContent === c5.textContent && c5.textContent === c8.textContent)||
        (c3.textContent === c6.textContent && c6.textContent === c9.textContent)||
        (c3.textContent === c5.textContent && c5.textContent === c7.textContent)){
        if (turn){
            var winner = "O";
        }else{
            winner = "X";
        }

        result.textContent = "Player "+ winner +" wins! \nRefresh the Page to Start Over!";
        inGame = false;
    }
}
function mark(Number) {
    var cell2 = document.getElementById("C"+Number.toString());
    if (inGame){
        if (turn){
            //cell.textContent = "X";
            cell2.textContent = "X";
            result.textContent = "Player O's turn"
            turn = false;

        } else {
            //cell.textContent = "O";
            cell2.textContent = "O";
            result.textContent = "Player X's turn"
            turn = true;
        }
        num++;
        if (num >= 4){
            checkWinner();
        }
    }


}



