let imagesArray = [...document.getElementsByClassName('image')];
let stringsArray = ["Kamien", "Nożyce", "Papier"];
let btn = document.getElementById("btn");
let winnerString = document.getElementById("winnerString");
let computerString = document.getElementById("computerString");
let yourPickString = document.getElementById("yourPickString");
let win = document.getElementById("win");
let draw = document.getElementById("draw");
let lose = document.getElementById("lose");
let winScore = 0;
let drawScore = 0;
let loseScore = 0;
let number = 1;
btn.disabled = true;
let computerPick;
let myPick;
let flag = false;
btn.addEventListener("click", computerChoice);

function checkAllIsGood() {
    if (yourPickString.textContent === "Twoj wybor:") {
        btn.disabled = true;
    } else if (yourPickString.textContent !== "Twoj wybor: ") {
        btn.disabled = false;
    }
}

function onClickChoice() {
    for (let i = 0; i < 3; i++) {
        imagesArray[i].addEventListener('click', function () {
            if(btn.textContent !=="Rozpocznij nowa gre"){
            myPick = imagesArray[i];
            myPick.classList.add("active-item");
            yourPickString.innerHTML = "Twoj wybor: " + stringsArray[imagesArray.indexOf(myPick)];
            removeClass(myPick);
            checkAllIsGood();
            }
        })
    }

}

function computerChoice() {

    computerPick = imagesArray[Math.floor(Math.random() * 3)];
    computerString.innerHTML = "Wybor komputera: " + stringsArray[imagesArray.indexOf(computerPick)];
    if (btn.textContent != "Rozpocznij nowa gre") {
        winner();
    }
    myPick.classList.remove("active-item");
    btn.textContent = "Rozpocznij nowa gre";
    checkAllIsGood();

    if (flag == true) {

        btn.textContent = "START";
        btn.disabled = true;
        return resetGame();
    } else {
        flag = true;
    }
}

function removeClass(myPick) {
    for (let i = 0; i < 3; i++) {
        if (imagesArray[i] !== myPick) {
            imagesArray[i].classList.remove("active-item");
        }
    }
}

function resetGame() {
    flag = false;
    winnerString.textContent = "Zwyciezca:";
    computerString.textContent = "Wybor komputera:";
    yourPickString.textContent = "Twoj wybor:";
}

function winner() {

    switch (true) {
        case (myPick == imagesArray[0] && computerPick == imagesArray[0]):
            winnerString.innerHTML = "Zwyciezca: Remis";
            drawScore++;
            draw.textContent = "Remis: " + drawScore;
            break;
        case (myPick == imagesArray[0] && computerPick == imagesArray[1]):
            winnerString.innerHTML = "Zwyciezca: Ty";
            winScore++;
            win.textContent = "Wygrane: " + winScore;
            break;
        case (myPick == imagesArray[0] && computerPick == imagesArray[2]):
            winnerString.innerHTML = "Zwyciezca: Komputer";
            loseScore++;
            lose.textContent = "Przegrane: " + loseScore;
            break;
        case (myPick == imagesArray[0] && computerPick == imagesArray[2]):
            winnerString.innerHTML = "Zwyciezca: Komputer";
            loseScore++;
            lose.textContent = "Przegrane: " + loseScore;
            break;
        case (myPick == imagesArray[1] && computerPick == imagesArray[0]):
            winnerString.innerHTML = "Zwyciezca: Komputer";
            loseScore++;
            lose.textContent = "Przegrane: " + loseScore;
            break;
        case (myPick == imagesArray[1] && computerPick == imagesArray[1]):
            winnerString.innerHTML = "Zwyciezca: Remis";
            drawScore++;
            draw.textContent = "Remis: " + drawScore;
            break;
        case (myPick == imagesArray[1] && computerPick == imagesArray[2]):
            winnerString.innerHTML = "Zwyciezca: Ty";
            winScore++;
            win.textContent = "Wygrane: " + winScore;
            break;
        case (myPick == imagesArray[2] && computerPick == imagesArray[0]):
            winnerString.innerHTML = "Zwyciezca: Ty";
            winScore++;
            win.textContent = "Wygrane: " + winScore;
            break;
        case (myPick == imagesArray[2] && computerPick == imagesArray[1]):
            winnerString.innerHTML = "Zwyciezca: Komputer";
            loseScore++;
            lose.textContent = "Przegrane: " + loseScore;
            break;
        case (myPick == imagesArray[2] && computerPick == imagesArray[2]):
            winnerString.innerHTML = "Zwyciezca: Remis";
            drawScore++;
            draw.textContent = "Remis: " + drawScore;

            break;
        default:
            console.log("Siema");
    }
}

onClickChoice();