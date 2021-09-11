let player1 = document.querySelector('.player');
let computer1 = document.querySelector('.computer');
let chance = document.querySelector('.chance');
let para = document.querySelector(".para");
const btnContainer = document.querySelectorAll(".option");
const btns = document.querySelector(".playAgain");
let info = document.querySelector(".info");
let pl = document.querySelector(".pl");
let co = document.querySelector(".co");

let p = 0;
let c = 0;
let ch = 3;
const arr = ["rock", "paper", "scissors"];

function infoInside(type, result) {
    info.classList.add(type);
    info.textContent = result;
}

function random() {
    let comp = Math.floor(Math.random() * arr.length);
    return (arr[comp]);
}

function display(player, computer) {
    pl.textContent = player;
    co.textContent = computer;
}

btnContainer.forEach(function (btn) {
    btn.addEventListener("click", function () {

        let computer = random();
        chance.innerHTML = --ch;
        let player = btn.dataset.id;

        if (player === computer) {
            player1.innerHTML = ++p;
            computer1.innerHTML = ++c;
            info.classList.add("success");
            info.textContent = "Its a tie";
            display(player, computer);

        }
        else if (player == "rock" && computer == "paper") {
            computer1.innerHTML = ++c;
            info.classList.add("danger");
            info.textContent = "computer wins";
            display(player, computer);
        }
        else if (player == "paper" && computer == "rock") {
            player1.innerHTML = ++p;
            info.classList.add("success");
            info.textContent = "player wins";
            display(player, computer);
        }
        else if (player == "rock" && computer == "scissors") {
            player1.innerHTML = ++p;
            info.classList.add("success");
            info.textContent = "player wins";
            display(player, computer);
        }
        else if (player == "scissors" && computer == "rock") {
            computer1.innerHTML = ++c;
            info.classList.add("danger");
            info.textContent = "computer wins";
            display(player, computer);
        }
        else if (player == "paper" && computer == "scissors") {
            computer1.innerHTML = ++c;
            info.classList.add("danger");
            info.textContent = "computer wins";
            display(player, computer);
        }
        else if (player == "scissors" && computer == "paper") {
            player1.innerHTML = ++p;
            info.classList.add("success");
            info.textContent = "player wins";
            display(player, computer);
        }

        if (ch <= 0) {
            console.log(ch);
            para.textContent = "Game Over";
            btns.style.visibility = "visible";
            
            setInterval(() => {
                if (p === c) {
                    info.classList.add("success");
                    info.textContent = "match is tie";
                }
                else if (p > c) {
                    info.classList.remove("danger");
                    info.classList.add("success");
                    info.textContent = "Player won the match";
                }
                else {
                    info.classList.remove("success");
                    info.classList.add("danger");
                    info.textContent = "Computer won the match";
                }

            }, 2000);
        }

    });

});

btns.addEventListener("click", function () {
    window.location.reload();
})
