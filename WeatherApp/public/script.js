// global var 
const searchInput = document.querySelector(".search-tap");
const searchBtn = document.querySelector(".search-btn");
const fiveDayDiv = document.querySelector(".five-day-cards");
const historyList = document.querySelector(".history-list");
// helper functions

const SaveToStorage = (city) => {
const citysFromStroage = localStorage.getItem("citys"); 
if (!citysFromStroage){
    let citysArray = [city];
    localStorage.setItem("citys", JSON.stringify(citysArray));
}   
else {
    let citysArray = JSON.parse(citysFromStroage);
    if (!citysArray.includes(city)){
        citysArray.push(city);
        localStorage.setItem("citys", JSON.stringify(citysArray));
    };
   
    
}
}

const getDay = (date) => {
    let newDate = new Date(date);
    switch (newDate.getDay()){
        case 0: 
         return "Sunday";
        case 1: 
         return "Monday";
        case 2: 
         return "Tuesday";
        case 3: 
         return "Wednesday";
        case 4: 
         return "Thursday";
        case 5: 
         return "Friday";
        case 6: 
         return "Saturday";
        default:
            return "error";
    }
};

const renderFiveDay = (data) => {
 for (let i = 0; i < data.length; i++){
   const card = document.createElement("div");
   card.classList.add("card");
   card.innerHTML = `<h1>${getDay(data[i].date)}</h1>
   <img src=${data[i].icon} alt="">
<div>
  <p>Temperature: ${data[i].temp}</p>
  <p>Precipitation: ${data[i].precipitation}</p>
  <p>Wind Speed: ${data[i].wind}</p>
</div>`;
   fiveDayDiv.appendChild(card);

 }
}

const fetchFiveDay = (city) => {
    fetch('/fiveday', {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            city
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        renderFiveDay(data);
    })
};


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

const fetchTodayWeather = (city) => {
    
    fetch('/search', {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            city
        })
    })
    .then(res => res.json())
    .then(data => {
        
        renderTodayWeather(data);
        
    })
    

};



const submitSearch = () => {
// fetchFiveDay();
fetchTodayWeather(searchInput.value);
fetchFiveDay(searchInput.value);
SaveToStorage(searchInput.value);
};

const renderSearchHistory = () => {
    const localCitys = JSON.parse(localStorage.getItem("citys"));
    if (localCitys) {
      for (let i=0; i<localCitys.length; i++){
          const li = document.createElement("li");
          
      }
    }

};


// event listners

searchBtn.addEventListener("click", submitSearch);
document.addEventListener("DOMContentLoaded", () => {

    const localCity = JSON.parse(localStorage.getItem("citys"));

    const cityToSearch = localCity ? localCity[localCity.length-1]:"Washington D.C.";
   // To get the final index in array length-1 since 10 items but array counts 0-9
   fetchFiveDay(cityToSearch);
   fetchTodayWeather(cityToSearch);
});

