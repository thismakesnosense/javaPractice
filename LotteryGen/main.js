
document.body.onload = () => {
 document.querySelector(".play-form").addEventListener("click", (event) => {
  event.preventDefault();
  const userChoice = document.querySelector(".user-choice").value;
  console.log(userChoice);
  console.log(generateWinningNumber());
 })
}

const generateWinningNumber = () => Math.floor(Math.random()*9000+1000); 

 
