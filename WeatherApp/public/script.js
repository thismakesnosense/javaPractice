// global var 
const searchInput = document.querySelector(".search-tap");
const searchBtn = document.querySelector(".search-btn");

// helper functions

const fetchFiveDay = () => {
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&units=imperial&appid=`)
 .then(res => res.json())
 .then(data => {
    //  console.log("data", data);
     formatData(data.list);
 });

}

const formatData = (weatherArray) => {
const results = [];
for (let i = 4; i < weatherArray.length; i+=8){
    const current = weatherArray[i];
    const weatherOBJ = {
        temp: current.main.temp,
        precipitation: current.weather[0].description,
        icon: `http://openweathermap.org/img/w/${current.weather[0].icon}.png`,
        date: new Date(current.dt*1000),
        wind: current.wind.speed,
    }
    results.push(weatherOBJ);
}
console.log(results);
return results;
}; 

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
        console.log(data)
    })
    

};

const submitSearch = () => {
// fetchFiveDay();
fetchTodayWeather();
};

// event listners

searchBtn.addEventListener("click", submitSearch);

