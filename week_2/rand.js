function Update() {
    document.getElementById("inputVal").innerHTML= document.getElementById("js-range").value;
    document.getElementById("guessVal").max = document.getElementById("js-range").value;
 }
 
 function clicked() {
    var userGuess = document.getElementById("guessVal").value;
    var cpuGuess = Math.floor(Math.random() * document.getElementById("guessVal").max);
    
    if(userGuess < cpuGuess) document.getElementById("result").innerHTML = "You choose : " + userGuess +
     ", the machine choose : " + cpuGuess + "<br><strong>You lost!</strong>";

    else document.getElementById("result").innerHTML = "You choose : " + userGuess + 
    ", the machine choose : " + cpuGuess + "<br><strong>You Win!</strong>";
 
 }