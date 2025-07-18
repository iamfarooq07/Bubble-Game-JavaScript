const pButtom = document.querySelector(".pbtm");
const timing = document.querySelector("#time");
const hitBtn = document.querySelector("#hitval");
const scoreBtn = document.querySelector("#ScorePlus");

let hitValue = 0;
let timeVal = 60;
let score = 0;

function gameBubble() {
    let bubbleHTML = "";

    for (let i = 0; i <= 97; i++) {
        let number = Math.floor(Math.random() * 10);
        bubbleHTML += `<div class="bubble">${number}</div>`;
    }

    pButtom.innerHTML = bubbleHTML;
}

function timer() {
    let timeInterval = setInterval(function () {
        if (timeVal > 0) {
            timeVal--;
            timing.innerHTML = timeVal;
        } else {
            clearInterval(timeInterval);
            pButtom.innerHTML = `<h1>Game Over <br> Your Score is ${score}</h1>`;
            scoreBtn.innerHTML = 0;
            hitBtn.innerHTML = 0;
        }
    }, 1000);
}

function increaseScore() {
    score += 10;
    scoreBtn.innerHTML = score;
}

function getNewHit() {
    hitValue = Math.floor(Math.random() * 10);
    hitBtn.innerHTML = hitValue;
}

pButtom.addEventListener("click", function (e) {
    let clickedNumber = Number(e.target.textContent);

    if (clickedNumber === hitValue) {
        gameBubble();
        getNewHit();
        increaseScore();
    }
});

getNewHit();
scoreBtn.innerHTML = score;
hitBtn.innerHTML = hitValue;
timer();
gameBubble();
