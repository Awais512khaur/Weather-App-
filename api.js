import cloudImage from "/images/cloud.png";
import clearImage from "/images/clear.png";
import mistImage from "/images/mist.png";
import rainImage from "/images/rain.png";
import snowImage from "/images/snow.png";
const inputbox = document.querySelector(".inputbox");
const searchbtn = document.getElementById("searchbtn");
const weatherimage = document.querySelector(".weatherimage");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const locationnotfound = document.querySelector(".locationnotfound");
const container1 = document.querySelector(".container");
export async function checkWeather(city) 
{
  const apikey = "38c3cdb1e6fb4b4ee10150992a2d241b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const weatherdata = await fetch(url).then((response) => response.json());
  console.log("Weather Data:", weatherdata);
  if (weatherdata.cod === `404`) 
  {
    locationnotfound.style.display = "flex";
    console.log("Error");
    return;
  }
  locationnotfound.style.display = "none";
  temprature.innerHTML = `${Math.round(weatherdata.main.temp - 273.15)}°C`;
  description.innerHTML = `${weatherdata.weather[0].description}`;
  humidity.innerHTML = `${weatherdata.main.humidity}%`;
  wind.innerHTML = `${weatherdata.wind.speed} Km/H`;
  switch (weatherdata.weather[0].main.toLowerCase()) {
    case "clouds":
      weatherimage.src = cloudImage;
      container1.style.backgroundColor = " skyblue";
      break;
    case "clear":
      weatherimage.src = clearImage;
      container1.style.backgroundColor = "lightyellow";
      break;
    case "mist":
      weatherimage.src = mistImage;
      container1.style.backgroundColor = "grey";
      break;
    case "rain":
      weatherimage.src = rainImage;
      container1.style.backgroundColor = "skyblue";
      break;
    case "snow":
      weatherimage.src = snowImage;
      break;
    default:
      // weatherimage.src = defaultImage;
      break;
  }
}
