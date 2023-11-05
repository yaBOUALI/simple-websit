const score = JSON.parse(localStorage.getItem('score')) || {
    Ties:0,
    Wins:0,
    losses:0,
 }



function ElementScore() {
 document.querySelector('.js_score')
 .innerHTML=`Wins: ${score.Wins} , Losses: ${score.losses} , Ties: ${score.Ties}`;
 
}   

document.querySelector('.js_result')
  .innerHTML=`${result}.`;

document.querySelector('.js_result')
  .innerHTML=`you ${playrMove}b${computerMove}Computer `;


function playGame(playrMove) {
 let computerMove  = pickComputerMove();

    result = '' ;
 if (playrMove === 'scissors') {
       if (computerMove === 'rock') {
       result='You lose';
    }else if (computerMove === 'paper') {
       result = 'You win';

    }else if (computerMove === 'scissors') {
       result = 'Tei';
    }
 }else
 
 if (playrMove === 'paper') {
    if (computerMove === 'rock') {
       result='You win';
    }else if (computerMove === 'paper') {
       result = 'Tei';
    }else if (computerMove === 'scissors') {
       result = 'You lose';
    }
 }else

 if (playrMove === 'rock') {
    if (computerMove === 'rock') {
       result='Tei';
    }else if (computerMove === 'paper') {
       result = 'You lose';
    }else if (computerMove === 'scissors') {
       result = 'You win';
    }
 }
 
 if (result === 'You win') {
    score.Wins ++
 } else if (result === 'You lose') {
    score.losses ++
 } else if (result ==='Tei') {
    score.Ties ++
 }

 localStorage.setItem( 'score', JSON.stringify(score))

 document.querySelector('.js_result').innerHTML=result;

document.querySelector('.js_moves')
 .innerHTML=`You 
       <img src="${playrMove}-emoji 1.png" alt="">
       <img src="${computerMove}-emoji 1.png" alt="">
       Computer `;
 

    ElementScore();

 //  alert( ` You picked ${playrMove}. Computer picked ${computerMove}. ${result}.
 // Wins: ${score.Wins} , Losses: ${score.losses} , Ties: ${score.Ties}`);
}

function pickComputerMove() {
 const randomNumber = Math.random() ;
 let computerMove = '' ;

if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove ='rock';            
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove ='paper';
} else if (randomNumber >= 2/3 && randomNumber < 1){
  computerMove ='scissors';
}

return computerMove;
 
}