const currentTemp = document.querySelector("#current-temp");
const weatherIcon =document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');
const town = document.querySelector("#town");
const lon = "49.750017170515264";
const lat = "6.636837826728741";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=d4d2ef07ef422d2ec2f14b749024a3db&units=imperial`;


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function displayResults(data) {
  town.innerHTML = data.name;
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;

  captionDesc.innerHTML = data.weather[0].description;
  const icon = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', icon);
  weatherIcon.setAttribute("alt", data.weather[0].description);
}


apiFetch();