const winningNum = document.querySelector(".winning-num");
const userNum =  document.querySelector(".user-num");
const userInputChoice = document.querySelector(".user-choice");

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
// make helper function to check is user number matches winning number then set prizes for how many numbers match 
const generateWinningNumber = () => Math.floor(Math.random()*9000+1000); 


