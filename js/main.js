/* PING PONG */
var elPingRock = document.querySelector('.js-ping-pong-rock');
var elPingPaper = document.querySelector('.js-ping-pong-paper');
var elPingScissors = document.querySelector('.js-ping-pong-scissors');
var elResult = document.querySelector('.js-result');
var elResultWin = document.querySelector('.js-result-win');
var elScore = document.querySelector('.js-score');
var elScoreBot = document.querySelector('.js-score-bot');
// 1 = qogoz 2 = quduq 3 = qaychi
var scoreUser = 0;
var scoreBot = 0;
elPingRock.addEventListener('click', function (){
  var x = Math.floor(Math.random() * (3 - 1 + 1) + 1);


  if (x == 1){
    elResult.textContent = "You Win";
    elResultWin.textContent = 'random son ' + 'quduq' + ' edi';
    elScore.textContent = ++scoreUser;
  }
  else if (x == 2) {
    elResult.textContent = 'You Lose';
    elResultWin.textContent = 'random son ' + 'qogoz' + ' edi';
    elScoreBot.textContent = ++scoreBot
  }
  else if (x == 3) {
    elResult.textContent = 'You Draw';
    elResultWin.textContent = 'random son ' + 'qaychi' + ' edi';
  }
});

var scoreUser = 0;
var scoreBot = 0;
elPingPaper.addEventListener('click', function (){
  var x = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (x == 1){
    elResult.textContent = "You Win";
    elResultWin.textContent = 'random son ' + 'qaychi' + ' edi';
    elScore.textContent = ++scoreUser;
  }
  else if (x == 2) {
    elResult.textContent = 'You Lose';
    elResultWin.textContent = 'random son ' + 'qogoz' + ' edi';
    elScoreBot.textContent = ++scoreBot
  }
  else if (x == 3) {
    elResult.textContent = 'You Draw';
    elResultWin.textContent = 'random son ' + 'quduq' + ' edi';
  }
});

var scoreUser = 0;
var scoreBot = 0;
elPingScissors.addEventListener('click', function (){
  var x = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (x == 1){
    elResult.textContent = "You Win";
    elResultWin.textContent = 'rendom son ' + `qog'oz edi`;
    elScore.textContent = ++scoreUser;
  }
  else if (x == 2) {
    elResult.textContent = 'You Lose';
    elResultWin.textContent = 'rendom son ' + 'quduq edi';
    elScoreBot.textContent = ++scoreBot
  }
  else if (x == 3) {
    elResult.textContent = 'You Draw';
    elResultWin.textContent = 'rendom son ' + 'qaychi edi';
  }
});