const winningNum = document.querySelector(".winning-num");
const userNum =  document.querySelector(".user-num");
const userInputChoice = document.querySelector(".user-choice");
const lightShow = document.querySelector(".wow");

document.body.onload = () => {
 document.querySelector(".play-form").addEventListener("click", (event) => {
  event.preventDefault();
  const userChoice = userInputChoice.value;
  if (userChoice.length !== 4){
      alert("Please enter a four digit number.")
      return
  }; 
  
  console.log(userChoice);
  const winNum = generateWinningNumber();
  winningNum.innerText=winNum;
  userNum.innerText=userChoice;
  userInputChoice.value = "";
 })
}
var j=0;
function changeColors(){
var headTag = lightShow;
var bgColor = ["red", "yellow", "blue"];
headTag.style.backgroundColor = bgColor[j];
j=(j+1)%bgColor.length;
//  lightShow.append('Win');
};
// function above and var j sets and array of colors for the background color to change to then setting interval allows it to change with the two peramiters. 
setInterval(changeColors, 2000);
// make helper function to check is user number matches winning number then set prizes for how many numbers match 
const generateWinningNumber = () => Math.floor(Math.random()*9000+1000); 


