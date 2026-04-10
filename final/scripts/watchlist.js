import { createResponsiveNavbar, themeToggle, createFooterContent, displayMovies, getWatchlist } from "./functions.js";



//#region Header and Navigation
document.addEventListener("DOMContentLoaded", () => {
  createResponsiveNavbar();
  themeToggle();
})
//#endregion



//#region Watchlist
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
      showWatchlist();
      setupFilters();
    } else {
      throw Error(await response.text());
    }
  } catch (err) {
    console.log(err);
  }
}


function showWatchlist() {
  const watchlist = getWatchlist();

  const filtered = allMovies.filter(movie => watchlist.includes(movie.name));

  displayMovies(filtered, "watchlist-grid");
}


function applyFilter(genre = "All") {
  const container = document.getElementById("watchlist-grid");
  const watchlist = getWatchlist();

  let filtered = allMovies.filter((movie) => watchlist.includes(movie.name));

  if (genre !== "All") {
    filtered = filtered.filter((movie) => movie.genres.includes(genre));
  }

  if (filtered.length === 0) {
    container.innerHTML = "<p>Nothing yet. Add movies to your watchlist.</p>";
  } else {
    displayMovies(filtered, "watchlist-grid");
  }
}


function setupFilters() {
  const buttons = document.querySelectorAll("#watchlist-filters button");
  const container = document.getElementById("watchlist-grid");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      applyFilter(button.textContent);
    });
  });

  applyFilter();
}
//#endregion



//#region Footer
document.addEventListener("DOMContentLoaded", () => {
  createFooterContent();
})
//#endregion


