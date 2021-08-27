// global var 
const searchInput = document.querySelector(".search-tap");
const searchBtn = document.querySelector(".search-btn");
const fiveDayDiv = document.querySelector(".five-day-cards");

// helper functions

const SaveToStorage = (city) => {
const citysFromStroage = localStorage.getItem("citys"); 
if (!citysFromStroage){
    let citysArray = [city];
    localStorage.setItem("citys", JSON.stringify(citysArray));
}   
else {
    let citysArray = JSON.parse(citysFromStroage);
    citysArray.push(city);
    localStorage.setItem("citys", JSON.stringify(citysArray));
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
        renderFiveDay(data);
    })
}


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
SaveToStorage(searchInput.value);
};

// event listners

searchBtn.addEventListener("click", submitSearch);

