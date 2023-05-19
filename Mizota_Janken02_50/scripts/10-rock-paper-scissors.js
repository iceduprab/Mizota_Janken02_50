let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'あなたの負け.';
    } else if (computerMove === 'paper') {
      result = 'あなたの勝ち.'
    } else if (computerMove === 'scissors') {
      result = 'アイコ.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'あなたの勝ち.';
    } else if (computerMove === 'paper') {
      result = 'アイコ.'
    } else if (computerMove === 'scissors') {
      result = 'あなたの負け.';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'アイコ.';
    } else if (computerMove === 'paper') {
      result = 'あなたの負け.'
    } else if (computerMove === 'scissors') {
      result = 'あなたの勝ち.';
    }
  }

  if (result === 'あなたの勝ち.') {
    score.wins += 1;
  } else if (result === 'あなたの負け.') {
    score.losses += 1;
  } else if (result === 'アイコ.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `あなた <img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon"> パソコン`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `勝ち: ${score.wins}, 負け: ${score.losses}, アイコ: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}