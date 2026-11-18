let userPoint = 0;
let computerPoint = 0;

function jatek(playerChoice) {
    let valasztasok = ["ko", "papir", "ollo"];
    let random = Math.floor(Math.random() * 3);

    document.getElementById("koImg").style.borderWidth = "0px";
    document.getElementById("papirImg").style.borderWidth = "0px";
    document.getElementById("olloImg").style.borderWidth = "0px";

    if (playerChoice == "ko") {
        document.getElementById("koImg").style.borderWidth = "2px";
    }
    else if (playerChoice == "papir") {
        document.getElementById("papirImg").style.borderWidth = "2px";
    }
    else {
        document.getElementById("olloImg").style.borderWidth = "2px";
    }

    let computerChoice = valasztasok[random];

    document.getElementById("eredmenykep").src = `img/${computerChoice}.png`

    console.log(computerChoice)

    if ((playerChoice == "ko" && computerChoice == "papir")
        || (playerChoice == "papir" && computerChoice == "ollo")
        || (playerChoice == "ollo" && computerChoice == "ko")) {
        computerPoint++;
        console.log("comp:" + computerPoint);
        document.getElementById("eredmenyKiir").innerHTML = "A gép nyert. haha";
        document.getElementById("gepPontja").innerHTML = computerPoint;
    }
    else if ((playerChoice == "ko" && computerChoice == "ollo")
        || (playerChoice == "papir" && computerChoice == "ko")
        || (playerChoice == "ollo" && computerChoice == "papir")) {
        userPoint++;
        console.log("user:" + userPoint)
        document.getElementById("eredmenyKiir").innerHTML = "Te nyertél!"
        document.getElementById("tePontod").innerHTML = userPoint;
    }
    else {
        console.log("döntetlen......")
        document.getElementById("eredmenyKiir").innerHTML = "Döntetlen...."
    }
}