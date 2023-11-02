//?Varibale...

//dice
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold ');
const btnNew = document.querySelector('.btn--new');
const imgDice = document.querySelector('#img-dice');
//score
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
//current
const currentScoreElm1 = document.querySelector('#current--0');
const currentScoreElm2 = document.querySelector('#current--1');


imgDice.classList.add('hidden');
let scorse, currentScore, activePlayer, playing;

//?varible defualt... 
scorse = [0, 0];
currentScore = 0;
activePlayer = 0;
playing = true;

// console.log(dice);
//? funtion Arrys...


const switchPlayerDefault = () => {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
}

//* btn roll dice

const btnRollHandler = () => {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    imgDice.classList.remove('hidden');
    imgDice.src = `./public/img/dice (${dice}).png`

    if (dice !== 1) {
      currentScore += dice
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    } else {
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      //tavies player
      switchPlayerDefault()
    };
  };
};


const btnHoldHandler = () => {
  if (playing) {
    scorse[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scorse[activePlayer] ;
    if (scorse[activePlayer] >= 100) {
      playing = false;
      imgDice.classList.add('hidden');
    } else {
      switchPlayerDefault()
    };
  };
};

//! reset
const btnNewHandler = () => {
  imgDice.classList.add('hidden');
  score1.textContent = 0;
  score2.textContent = 0;
  currentScoreElm1.textContent = 0;
  currentScoreElm2.textContent = 0;
}
//?eventhandlers...

btnRoll.addEventListener('click', btnRollHandler);
btnHold.addEventListener('click', btnHoldHandler);
btnNew.addEventListener('click', btnNewHandler);