const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.getElementById('time-left'),
        score: document.getElementById('score')
    },
    value: {
        timerId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    },
    actions: {
        countdownTimerId: setInterval(countdown, 1000),
    }
};

function countdown(){
    state.value.currentTime--;
    state.view.timeLeft.textContent = state.value.currentTime;

    if(state.value.currentTime <= 0){
        clearInterval(state.actions.countdownTimerId);
        clearInterval(state.value.timerId);
        alert("Game Over! Your final score is: " + state.value.result);
    }
};

function playSound(){
    let audio = new Audio('./src/sounds/hit.m4a');
    audio.volume = 0.2;
    audio.play();
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
            }
        })
    });
}

function init() {
    moveEnemy();
    addListenerHitBox();
}

init();