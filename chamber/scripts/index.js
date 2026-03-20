
//#region Navigation
const menuBtn = document.querySelector("#ham-btn");
const navMenu = document.querySelector("#nav-bar");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (navMenu.classList.contains("show")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});
//#endregion



//#region Weather
const iconContainer = document.getElementById("weather-img");
const myTemp = document.getElementById("currentTemp");
const myDescription = document.getElementById("description");
const myHigh = document.getElementById("high");
const myLow = document.getElementById("low");
const myHumidity = document.getElementById("humidity");
const mySunrise = document.getElementById("sunrise");
const mySunset = document.getElementById("sunset");
const lat = "33.605533199257415";
const lon = "-117.87258254895444";
const key = "d4d2ef07ef422d2ec2f14b749024a3db";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;


async function apiFetch() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function displayWeather(data) {
  const icons = document.createElement("img");
  icons.id = "weather-icon";
  icons.setAttribute("src", `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`);
  icons.setAttribute("alt", `${data.weather[0].description}`);
  icons.setAttribute("width", 150);
  icons.setAttribute("height", 150);
  iconContainer.appendChild(icons);

  myDescription.innerHTML = data.weather[0].description;
  myHigh.innerHTML = `${Math.round(data.main.temp_max)}&deg;F`;
  myLow.innerHTML = `${Math.round(data.main.temp_min)}&deg;F`;
  myHumidity.innerHTML = `${data.main.humidity}%`;
  mySunrise.innerHTML = toNormalTime(data.sys.sunrise);
  mySunset.innerHTML = toNormalTime(data.sys.sunset);
}


function toNormalTime(unix) {
  const date = new Date(unix * 1000);
  return date.toLocaleTimeString();
}


apiFetch();
//#endregion



//#region Forecast
const todayTemp = document.getElementById("todayTemp");
const tomorrowTemp = document.getElementById("tomorrowTemp");
const overmorrowTemp = document.getElementById("overmorrowTemp");
const forecastUrl = `https://pro.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;


async function forecastFetch() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function displayForecast(data) {
  todayTemp.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;F`;
  tomorrowTemp.innerHTML = `${getDayName(1)}: ${Math.round(data.list[1].main.temp)}&deg;F`;
  overmorrowTemp.innerHTML = `${getDayName(2)}: ${Math.round(data.list[2].main.temp)}&deg;F`;
}


function getDayName(daysAhead) {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}


forecastFetch();
//#endregion



//#region Spotlights
async function getSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displaySpotlights(data.members);
}


function displaySpotlights(spotlights) {
  const container = document.getElementById("spotlights");
  container.innerHTML = "";
  const validMembers = spotlights.filter((member) => member.membership != 1);

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * validMembers.length);
    const member = validMembers[randomIndex];

    const spotlight = document.createElement("div");
    spotlight.classList.add("spotlight");
    spotlight.classList.add(`membership${member.membership}`);
    spotlight.innerHTML = `
      <h3>${member.name}</h3>

      <div class="spotlight-content">
        <div class="spotlight-img-container">
          <img src="images/${member.image}.webp" alt="${member.name} logo">
        </div>

        <div class="spotlight-text">
          <p>Address: ${member.address}</p>
          <p>Phone: ${member.phone}</p>
          <p>URL: <a href="${member.website}" target="_blank" rel="noopener noreferrer">${member.name}</a></p>
        </div>
      </div>
    `;

    container.appendChild(spotlight);

    validMembers.splice(randomIndex, 1);
  }
}


getSpotlights();
//#endregion



//#region Footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
//#endregion
