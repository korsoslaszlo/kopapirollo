let userPoint = 0;
let computerPoint = 0;

function jatek(playerChoice) {
    let valasztasok = ["ko", "papir", "ollo"];
    let random = Math.floor(Math.random() * 3);

    let computerChoice = valasztasok[random];

    document.getElementById("eredmenykep").src = `img/${computerChoice}.png`

    console.log(computerChoice)

    if ((playerChoice == "ko" && computerChoice == "papir")
        || (playerChoice == "papir" && computerChoice == "ollo")
        || (playerChoice == "ollo" && computerChoice == "ko")) {
        computerPoint++;
        console.log("comp:" + computerPoint)
    }
    else if ((playerChoice == "ko" && computerChoice == "ollo")
        || (playerChoice == "papir" && computerChoice == "ko")
        || (playerChoice == "ollo" && computerChoice == "papir")) {
        userPoint++;
        console.log("user:" + userPoint)
    }
    else {
        console.log("döntetlen......")
    }
}