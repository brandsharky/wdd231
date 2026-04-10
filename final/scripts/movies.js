import { createResponsiveNavbar, themeToggle, createFooterContent, displayMovies } from "./functions.js";



//#region Header and Navigation
document.addEventListener("DOMContentLoaded", () => {
  createResponsiveNavbar();
  themeToggle();
})
//#endregion



//#region Movies
document.addEventListener("DOMContentLoaded", () => {
  getMovies();
});


let allMovies = [];
async function getMovies() {
  try {
    const response = await fetch("data/movies.json")
    if (response.ok) {
      const data = await response.json();
      allMovies = data.movies;
      displayMovies(allMovies, "movies-grid");
      setupFilters();
    } else {
      throw Error(await response.text());
    }
  } catch (err) {
    console.log(err);
  }
}


function setupFilters() {
  const buttons = document.querySelectorAll("#movie-filters button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const genre = button.textContent;

      if (genre === "All") {
        displayMovies(allMovies, "movies-grid");
      } else {
        const filtered = allMovies.filter(movie => movie.genres.includes(genre));

        displayMovies(filtered, "movies-grid");
      }
    });
  });
}
//#endregion



//#region Footer
document.addEventListener("DOMContentLoaded", () => {
  createFooterContent();
})
//#endregion


