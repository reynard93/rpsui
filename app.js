
let items = ["paper","scissors","rock"];
let round = 5;
let comWins;
let playerWins;

document.querySelector('.selectionMenu').addEventListener('click', function(e){
  if(round < 5){
    if (e.target.alt === 'scissors' || e.target.alt === "rock" || e.target.alt === "paper"){
      let choice = e.target.alt;
      let playString = playRound(choice);
      document.querySelector('.final-content').textContent = playString;
      if (playString.includes('Computer')){
        comWins++;
        document.querySelector('#score-1').textContent = comWins;
        round++;
        document.querySelector('.btn-new').textContent = `Round ${round}`;
      }else if (playString.includes('player')){
        playerWins++;
        document.querySelector('#score-0').textContent = playerWins;
        round++;
        document.querySelector('.btn-new').textContent = `Round ${round}`;
      }
      if(round === 5){
        document.querySelector('.final-content').textContent = "Winner: " + (playerWins > comWins ? "PLAYER!!!!" : "COMPUTER!!!")+ "click Round to start again";

      }
    }
  } 
});

function computerPlay(){
  return items[Math.floor(Math.random()*items.length)];
}


function playRound(playerChoice){
  let computerChoice = computerPlay();
  console.log(playerChoice, computerChoice)
  if (computerChoice ===  playerChoice){
    if (round === 0){
      document.querySelector('.btn-new').textContent = `Round 1`;
      return 'DRAW! No count';
    }
    else{
      return 'DRAW! No count';
    }
  }
  else if (items.indexOf(computerChoice) === 0 && items.indexOf(playerChoice) === 2){
    return 'Computer wins!';
  } else if (items.indexOf(playerChoice) === 0 && items.indexOf(computerChoice) === 2){
    return 'The player wins! YES!!';
  }
  else if (items.indexOf(computerChoice) > items.indexOf(playerChoice)){
    return 'The Computer wins!';
  } else {
    return 'The player wins! YES!!';
  }
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  round = 0;
  comWins = 0;
  playerWins = 0;
  document.querySelector('#score-0').textContent = "0";
  document.querySelector('#score-1').textContent = "0";
  document.querySelector('.final-content').textContent = '';
  document.querySelector('.btn-new').textContent = `Round 1`;
}

