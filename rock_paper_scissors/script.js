//model
let currentRound = 0;
let resultat = '';
const score= [0,0]
const wordIndex = ['Rock', 'Paper', 'Scissors']

//view
updateView();
function updateView(){
    let html = '<a href="../index.html"><header><b>Rock Paper Scissors</b></header></a>';
    html+=`
        <button class="resetBtn" onclick="window.location.reload()">Reset</button>
        <a href="unitTesting.html"><button class="resetBtn qunit">QUnit</button></a>
        <div class="row">
            <div id="infoRow">Player: <b>${score[0]}</b></div>
            <div id="infoRow">Round: <b>${currentRound}</b></div>
            <div id="infoRow">AI: <b>${score[1]}</b></div>
        </div>
        <div class="row choices">
            <img class="pickBtn" onclick="compareChoices(0)" src="Icons/Rock.png">
            <img class="pickBtn" onclick="compareChoices(1)" src="Icons/Paper.png">
            <img class="pickBtn" onclick="compareChoices(2)" src="Icons/Scissors.png">
        </div>
        <div class="result">${resultat}</div>
    `;
    document.getElementById('app').innerHTML=html;
}

//controller
function compareChoices(playerChoice){
    let aiChoice = Math.floor(Math.random()*wordIndex.length);
    resultat = `You played <b>${wordIndex[playerChoice]}</b>. <br> AI played <b>${wordIndex[aiChoice]}</b>.<br>`;
    if (playerChoice > 0 && playerChoice == (aiChoice+1) ||  playerChoice == 0 && aiChoice == 2){
        resultat += `<b>You won!</b>`;
        score[0]++;
    } 
    else if (playerChoice==aiChoice) resultat += `<b>Draw!</b>`;
    else {
        resultat += `<b>AI won!</b>`;
        score[1]++;
    }
    currentRound++;
    checkWin();
    updateView();
}

function checkWin(){
    if (score[0] >= 3){
        alert("Player wins!");
        window.location.reload();
    } 
    else if (score[1] >= 3){
        alert ("AI wins!");
        window.location.reload();
    }
    else return;
}