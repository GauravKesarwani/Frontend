'use strict';

const borderWidth = 8;
const ballDiameter = 16;
const paddleHeight = 20;
const paddleWidth = 64;
const containerMargin = 10
const ball = document.getElementById('ball');
const score = document.getElementById('score');
const paddle = document.getElementById('paddle');
const gameContainer = document.getElementById('game-container');
let aWidth;
let aHeight;
let pWidth;
let pHeight;
let dx = 2;
let dy = 2;
let ballX = 40;
let ballY = 0;
let timer;
let drag = false;
let paddleLeft = 60;
let startX;
let diffX;
let gameScore = 0;


window.addEventListener("load", init);
window.addEventListener("resize", init);

function init() {
    aWidth = window.innerWidth;
    aHeight = window.innerHeight;
    pWidth = aWidth - 2 * containerMargin;
    pHeight = aHeight - 2 * containerMargin;
    
    gameContainer.style.width = `${pWidth}px`;
    gameContainer.style.height = `${pHeight}px`;
    paddle.style.left = '60px';
    ball.style.left = '40px';
    ball.style.top = '8px';

    paddle.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    timer = requestAnimationFrame(startGame);
}

function startGame() {
  animateBall();
  detectCollisionWithPaddle();

  timer = requestAnimationFrame(startGame);
}

function animateBall() { 
    ballX += dx;
    ballY += dy;

    if (collisionX()) {
        console.log('ballx on collision', ballX);
        dx = dx * -1;
    }

    if (collisionY()) {
        dy = dy * -1;
    }

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    if (endOfGame(ballX, ballY)) {
        //cancelAnimationFrame(timer);
    }
}

function detectCollisionWithPaddle() {
  if (
    ballX > paddleLeft &&
    ballX < paddleLeft + 64 &&
    ballY > pHeight - (2 * borderWidth + paddleHeight + ballDiameter)
  ) {
      dy *= -1;  
    gameScore++;
  }
  displayScore();
}

function displayScore() {
  score.innerHTML = `Score : ${gameScore}`;
}

function collisionX() {
    if ((ballX > pWidth - (ballDiameter + 2 * borderWidth)) || ballX < 0) {
        return true;
    }

    return false;
}

function collisionY() {
    if ((ballY > pHeight - (ballDiameter + 2 * borderWidth)) || (ballY < 0)) {
        return true;
    }

    return false;
}

function handleMouseDown(event) {
    drag = true;
    startX = event.clientX;
    document.addEventListener('mousemove', handleMouseMove);

}

function handleMouseMove(event) {
    if (drag) {
        diffX = event.clientX - startX;
        paddleLeft += diffX;
        startX = event.clientX;
       

        if (paddleLeft > pWidth - (paddleWidth + 2 * borderWidth)) {
            paddleLeft = pWidth - (paddleWidth + 2 * borderWidth);
        } else if (paddleLeft < 0) {
            paddleLeft = 0;
        }
        
        paddle.style.left = `${paddleLeft}px`;
    }
}

function handleMouseUp(event) {
    drag = false;
    document.removeEventListener('mousemove', handleMouseMove);
}

function endOfGame(x, y) {
    if (((x < paddleLeft) || (x > paddleLeft + 64)) && ((y + 16) > (pHeight - 20))) {
        return true;
    }

    return false;
}


