let tab = document.getElementsByClassName('image');
let computerPick = tab[Math.floor(Math.random() * 3)];
let myPick;
function onClickChoice() {
    for (let i = 0; i < 3; i++) {
        tab[i].addEventListener('click', function () {
            myPick = tab[i];
            console.log(myPick);
            winner(); // moj wybor
        })
    }
}

function winner() {
    switch (true) {
        case (myPick == tab[0] && computerPick == tab[0]):
            console.log("Remis");
            break;
        case (myPick == tab[0] && computerPick == tab[1]):
            console.log("Wygrales z komputerkiem");
            break;
        case (myPick == tab[0] && computerPick == tab[2]):
            console.log("Przegrales  z komputerkiem");
            break;
        case (myPick == tab[0] && computerPick == tab[2]):
            console.log("Przegrales  z komputerkiem");
            break;
        case (myPick == tab[1] && computerPick == tab[0]):
            console.log("Przegrales");
            break;
        case (myPick == tab[1] && computerPick == tab[1]):
            console.log("Remis");
            break;
        case (myPick == tab[1] && computerPick == tab[2]):
            console.log("Wygrales");
            break;
        case (myPick == tab[2] && computerPick == tab[0]):
            console.log("Wygrales");
            break;
        case (myPick == tab[2] && computerPick == tab[1]):
            console.log("Przegrales");
            break;
        case (myPick == tab[2] && computerPick == tab[2]):
            console.log("Remis");
            break;
        default:
            console.log("Siema");
    }
}
onClickChoice();
// console.log(myPick);
// console.log(computerPick );