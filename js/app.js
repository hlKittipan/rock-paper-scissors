let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector("score-board");
const result = document.querySelector(".result > p > strong");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function main() {
    rock.addEventListener('click', function () {
        game("r");
    });
    paper.addEventListener('click', function () {
        game("p");
    });
    scissors.addEventListener('click', function () {
        game("s");
    });
}

function getComputerChoice() {
    const choices = ['cr', 'cs', 'cp'];
    const randomNubmer = Math.floor(Math.random() * 3);
    return choices[randomNubmer];
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rcp":
        case "pcs":
        case "scr":
            lose(userChoice,computerChoice);
            break;
        case "rcs":
        case "pcr":
        case "scp":
            win(userChoice,computerChoice);
            break;
        default: draw(userChoice,computerChoice);

    }
}

function win(userChoice,computerChoice) {
    console.log("win");
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = convertWord(userChoice) + " VS " + convertWord(computerChoice) + ", Your Win !!";
    glow(userChoice,computerChoice);
    showComputerChoice(computerChoice);
}

function lose(userChoice,computerChoice) {
    computerScore++;
    console.log("lose");
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertWord(userChoice) + " VS " + convertWord(computerChoice) + ", Your Lose !!";
    glow(userChoice,computerChoice);
    showComputerChoice(computerChoice);
}

function draw(userChoice,computerChoice) {
    console.log("It's a draw.");
    result.innerHTML = convertWord(userChoice) + " VS " + convertWord(computerChoice) + ", Draw !!";
    glow(userChoice,computerChoice);
    showComputerChoice(computerChoice);
}

function convertWord(letter) {
    if (letter == "r" || letter == "cr"){
        return "Rock";
    }else if (letter == "p" || letter == "cp"){
        return "Paper"
    }else {
        return "Scissors"
    }
}

function glow(userChoice,computerChoice) {
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove('green-glow');
    },500);
    document.getElementById(computerChoice).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(computerChoice).classList.remove('green-glow');
    },500);
}

function showComputerChoice(computerChoice) {
    if (computerChoice == "cp") {
        $("#img-p").show();
        $("#img-cp").hide();
        $("#img-r").hide();
        $("#img-cr").show();
        $("#img-s").hide();
        $("#img-cs").show();
        setTimeout(function () {
            $("#img-p").hide();
            $("#img-cp").show();
        },500);
    }else if (computerChoice == "cr") {
        $("#img-p").hide();
        $("#img-cp").show();
        $("#img-r").show();
        $("#img-cr").hide();
        $("#img-s").hide();
        $("#img-cs").show();
        setTimeout(function () {
            $("#img-r").hide();
            $("#img-cr").show();
        },500);
    }else{
        $("#img-p").hide();
        $("#img-cp").show();
        $("#img-r").hide();
        $("#img-cr").show();
        $("#img-s").show();
        $("#img-cs").hide();
        setTimeout(function () {
            $("#img-s").hide();
            $("#img-cs").show();
        },500);
    }
}

main();
