const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2c5828ec99msh930f248050df259p1d3facjsn9374a6505fd7",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city.toUpperCase();
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

const getOtherWeather = async (city) => {
  const response = await fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  );
  let data = await response.json();
  console.log(data);
  show(data,city)
};

let cityArray = ["delhi", "mumbai", "shillong", "tokyo"];
cityArray.map((city) => {
  getOtherWeather(city);
});

function show(data, city) {
  let tab = `<tr>
        <th scope="row" class="text-start">${city.toUpperCase()}</th>           
        <td>${data.temp} &#8451</td>  
        <td>${data.feels_like} &#8451 </td>
        <td>${data.humidity} % </td> 
        <td>${data.max_temp} &#8451</td>   
        <td>${data.min_temp} &#8451</td> 
        <td>${data.cloud_pct} </td>
        <td>${data.wind_speed} m/s</td>   
       </tr>`;

  // Setting innerHTML as tab variable
  document.getElementById(city).innerHTML = tab;
}
