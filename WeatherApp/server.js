const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const dotenv = require('dotenv');


dotenv.config();
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/search', (req, res) => {
   console.log(req.body,"req.body");
   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&units=imperial&appid=${process.env.API_key}`)
    .then(response => {
        // console.log("data", data);
        const data = response.data;
        const weatherOBJ = {
            temp: data.main.temp,
            precipitation: data.weather[0].description,
            icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
            date: new Date(data.dt*1000),
            wind: data.wind.speed,
            city: data.name,
        }
        console.log(weatherOBJ);
        res.status(201).json(weatherOBJ);
    })
    .catch(err => res.status(500).json(err));
});

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

app.post('/fiveday', (req,res) => {
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${req.body.city}&units=imperial&appid=${process.env.API_key}`)
  
  .then(response => {
      console.log(response);
     const results = formatData(response.data.list);
     res.status(201).json(results);
  })
  .catch(err => res.status(500).json(err));

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

