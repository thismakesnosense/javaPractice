const winningNum = document.querySelector(".winning-num");
const userNum = document.querySelector(".user-num");
const userInputChoice = document.querySelector(".user-choice");
const lightShow = document.querySelector(".wow");
const Prize = document.querySelector(".prize");

const PlayBtn = document.querySelector(".play-form");

const clear = () => {
winningNum.innerText = "";
userNum.innerText = "";
Prize.innerText = "";
};


   
    document.querySelector(".play-form").addEventListener("click", (event) => {
        event.preventDefault();
        clear();
    
        const winNum = generateWinningNumber();
        
        console.log(winNum);
        const userChoice = userInputChoice.value;
        
        if (userChoice.length !== 4) {
            console.log(userChoice);
            alert("Please enter a four digit number.")
            return
        };
        winningNum.innerText = winNum;
        userNum.innerText = userChoice;
        userInputChoice.value = "";
        if (checkGrandPrize(userChoice, winNum)) {
            Prize.innerText = "You Won the Grand Prize"
            return
        };

        console.log(userChoice);

        splitPrize(userChoice, winNum);
        
        userInputChoice.value = "";
        PlayBtn.innerText = "Play Again";
    })


// document.body.onload = () => {
//    startGame();
// };



function checkGrandPrize(user, winner) {

    return user == winner

};

function splitPrize(user, winner) {
    
    const strWinner = winner.toString();
    let counter = 0;
    for (let char of user) {
        if (strWinner.includes(char)) {
            counter += 1;
            console.log("yay")

        };


    };
    if (counter === 4){
        Prize.innerText = "You Won the Silver Prize"
    }
    else if (counter === 3){
        Prize.innerText = "You Won the Bronze Prize"
    }
    else if(counter === 2){
        Prize.innerText = "You Won the Copper Prize"
    }
    else{
        Prize.innerText = "So close"
    }
    return counter
};
//this is where we are, maybe a way to let them play again without reloading page.

// it loops over winning number and if user includes one of the numbers it will return as ture and function will run, had to switch to a sting so it could check for stings too not just for a number, if not it returns to the top
var j = 0;
function changeColors() {
    var headTag = lightShow;
    var bgColor = ["red", "yellow", "blue"];
    headTag.style.backgroundColor = bgColor[j];
    j = (j + 1) % bgColor.length;

};
// function above and var j sets and array of colors for the background color to change to then setting interval allows it to change with the two peramiters. 
setInterval(changeColors, 2000);
// make helper function to check is user number matches winning number then set prizes for how many numbers match 
const generateWinningNumber = () => Math.floor(Math.random() * 9000 + 1000);


