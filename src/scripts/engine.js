const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.getElementById('time-left'),
        score: document.getElementById('score'),
        lives: document.getElementById('lives')
    },
    value: {
        timerId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
        lives: 3,
    },
    actions: {
        countdownTimerId: setInterval(countdown, 1000),
    }
};

function countdown(){
    state.value.currentTime--;
    state.view.timeLeft.textContent = state.value.currentTime;

    if(state.value.currentTime <= 0){
        alert("Time's Up! Your final score is: " + state.value.result);
        resetGame();
    }
};

function playSound(){
    let audio = new Audio('./src/sounds/hit.m4a');
    audio.volume = 0.2;
    audio.play();
}

function resetGame(){
    // Limpar intervalos
    clearInterval(state.actions.countdownTimerId);
    clearInterval(state.value.timerId);
    
    // Resetar valores
    state.value.result = 0;
    state.value.currentTime = 60;
    state.value.lives = 3;
    state.value.hitPosition = 0;
    
    // Atualizar interface
    state.view.score.textContent = state.value.result;
    state.view.timeLeft.textContent = state.value.currentTime;
    state.view.lives.textContent = `x${state.value.lives}`;
    
    // Limpar inimigo das casas
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    });
    
    // Reiniciar o jogo
    state.actions.countdownTimerId = setInterval(countdown, 1000);
    moveEnemy();
}

function loseLife(){
    state.value.lives--;
    state.view.lives.textContent = `x${state.value.lives}`;
    
    if(state.value.lives <= 0){
        alert("Game Over! Your final score is: " + state.value.result);
        resetGame();
    }
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    });
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add('enemy');
    state.value.hitPosition = randomSquare.id;
};

function moveEnemy(){
    state.value.timerId = setInterval(randomSquare, state.value.gameVelocity);
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", ()=> {
            if(square.id === state.value.hitPosition){
                state.value.result++;
                state.view.score.textContent = state.value.result;
                state.value.hitPosition = null;
                playSound();
            } else {
                // Se clicar no lugar errado, perde uma vida
                loseLife();
            }
        })
    });
}

function init() {
    moveEnemy();
    addListenerHitBox();
}

init();