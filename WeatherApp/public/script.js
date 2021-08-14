// global var 
const searchInput = document.querySelector(".search-tap");
const searchBtn = document.querySelector(".search-btn");


// helper functions

const fetchFiveDay = () => {
    fetch('/fiveday', {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            city: searchInput.value
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}

//this formatting was moved to server.js
// const formatData = (weatherArray) => {
// const results = [];
// for (let i = 4; i < weatherArray.length; i+=8){
//     const current = weatherArray[i];
//     const weatherOBJ = {
//         temp: current.main.temp,
//         precipitation: current.weather[0].description,
//         icon: `http://openweathermap.org/img/w/${current.weather[0].icon}.png`,
//         date: new Date(current.dt*1000),
//         wind: current.wind.speed,
//     }
//     results.push(weatherOBJ);
// }
// console.log(results);
// return results;
// }; 

const renderTodayWeather = (weatherOBJ) => {
const h2 = document.querySelector(".current-h2");
const details = document.querySelector(".current-details");
const htmlString = `<img src=${weatherOBJ.icon} alt=${weatherOBJ.city}>
<div>
  <p>Temperature: ${weatherOBJ.temp}</p>
  <p>Precipitation: ${weatherOBJ.precipitation}</p>
  <p>Wind Speed: ${weatherOBJ.wind}</p>
</div>`;

h2.innerText = weatherOBJ.city;
details.innerHTML = htmlString;
};

const h2 = document.querySelector(".current-h2");
console.log(h2, "test h2");

const fetchTodayWeather = () => {
    
    fetch('/search', {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            city: searchInput.value
        })
    })
    .then(res => res.json())
    .then(data => {
        
        renderTodayWeather(data);
        
    })
    

};



const submitSearch = () => {
// fetchFiveDay();
fetchTodayWeather();
fetchFiveDay();
};

// event listners

searchBtn.addEventListener("click", submitSearch);

