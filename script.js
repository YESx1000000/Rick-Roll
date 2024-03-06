const gameBoard = document.querySelector('#gameBoard');
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector('#scoreText');
const resetBtn = document.querySelector('#resetBtn');
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const backColor = "#7c0e34";
const paddle1Color = "lightblue";
const paddle2Color = "lightblue";
const colorBorder = "black";
const ballColor = "white";
const ballRadius = 12.5;
const pattleSpeed = 50;

let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let BallXD = 0;
let BallYD = 0;
let p1Score = 0;
let p2Score = 0;
let paddle1 = {
  width: 25,
  height: 100,
  x: 0,
  y: 0,
};
let paddle2 = {
  width: 25,
  height: 100,
  x: gameWidth - 25,
  y: gameHeight - 100,
};

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGameFunction);

gameStart();
drawPaddles();

function gameStart(){};
function gameTick(){};
function clearBoard(){};
function drawPaddles(){
  ctx.strokeStyle = colorBorder;
  ctx.fillStyle = paddle1Color;
  ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
  ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

  ctx.strokeStyle = colorBorder;
  ctx.fillStyle = paddle2Color;
  ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
  ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};
function createBall(){};
function moveBall(){};
function drawBall(){};
function checkCollision(){};
function changeDirection(){};
function updateScore(){};
function resetGame(){};


