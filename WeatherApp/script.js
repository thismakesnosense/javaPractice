// global var 
const searchInput = document.querySelector(".search-tap");
const searchBtn = document.querySelector(".search-btn");
// helper functions

const fetchCityData = () => {
fetch(`https://....`)
 .then(res => res.json())
 .then(data => {
     console.log("data", data);
 });

}

// event listners

searchBtn.addEventListener("click", fetchCityData);

