import { createResponsiveNavbar, themeToggle, createFooterContent } from "./functions.js";



//#region Header and Navigation
document.addEventListener("DOMContentLoaded", () => {
  createResponsiveNavbar();
  themeToggle();
})
//#endregion



//#region Featured
async function getFeaturedMovies() {
  try {
    const response = await fetch("data/movies.json");
    if (response.ok) {
      const data = await response.json();
      displayFeaturedMovies(data.movies);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function displayFeaturedMovies(featuredMovies) {
  const container = document.getElementById("featured-movies");
  container.innerHTML = "";
  const copyFeaturedMovies = [...featuredMovies];

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * copyFeaturedMovies.length);
    const movie = copyFeaturedMovies[randomIndex];

    const card = document.createElement("div");
    card.classList.add("featured-card");

    card.innerHTML = `
      <p>${movie.rating}</p>
      <img src="images/${movie.image}.webp" alt="${movie.name}" loading="lazy">
      <h3>${movie.name}</h3>
    `;

    container.appendChild(card);

    copyFeaturedMovies.splice(randomIndex, 1);
  }
}


getFeaturedMovies();
//#endregion



//#region Footer
document.addEventListener("DOMContentLoaded", () => {
  createFooterContent();
})
//#endregion


