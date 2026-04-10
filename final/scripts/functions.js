
//#region Responsive Navbar
export function createResponsiveNavbar() {
  const menuBtn = document.querySelector("#ham-btn");
  const navMenu = document.querySelector("#nav-bar");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
      menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
    } else {
      menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`;
    }
  });
}
//#endregion



//#region Light/Dark Mode
export function themeToggle() {
  let lightmode = localStorage.getItem("lightmode");
  const themeSwitch = document.getElementById("toggleLightMode");

  const enableLightmode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("lightmode", "active");
  };

  const disableLightmode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("lightmode", null);
  };

  if (lightmode === "active") enableLightmode();

  themeSwitch.addEventListener("click", () => {
    document.startViewTransition(() => {
      lightmode = localStorage.getItem("lightmode");
      lightmode !== "active" ? enableLightmode() : disableLightmode();
    });
  });
}
//#endregion



//#region Watchlist Function
export function getWatchlist() {
  return JSON.parse(localStorage.getItem("watchlist")) || [];
}


export function saveWatchlist(list) {
  localStorage.setItem("watchlist", JSON.stringify(list));
}
//#endregion



//#region Display Movies
export function displayMovies(moviesList, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const watchlist = getWatchlist();

  moviesList.forEach(movie => {
    const isSaved = watchlist.includes(movie.name);

    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <span class="rating">${movie.rating}</span>
      <img src="images/${movie.image}.webp" alt="${movie.name}" loading="lazy">
      <h3>${movie.name}</h3>
      <p class="movie-released">Released: <span>${movie.released}</span></p>
    `;


    const movieGenres = document.createElement("div");
    movieGenres.classList.add("movie-genres");

    const shuffled = [...movie.genres].sort(() => 0.5 - Math.random());
    const selectedGenres = shuffled.slice(0, 2);

    selectedGenres.forEach((moviegenre) => {
      const genre = document.createElement("p");
      genre.textContent = moviegenre;

      movieGenres.appendChild(genre);
    });


    const watchBtn = document.createElement("button");
    watchBtn.classList.add("watchlistToggle");
    if (isSaved) {
      watchBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>`;
      watchBtn.classList.add("positive");
      watchBtn.classList.remove("negative");
    } else {
      watchBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`;
      watchBtn.classList.add("negative");
      watchBtn.classList.remove("positive");
    }


    watchBtn.addEventListener("click", () => {
      let list = getWatchlist();

      if (list.includes(movie.name)) {
        list = list.filter(m => m !== movie.name);
      } else {
        list.push(movie.name);
      }

      saveWatchlist(list);

      displayMovies(moviesList, containerId);
    });


    const modalButton = document.createElement("button");
    modalButton.textContent = "Movie Details";
    modalButton.addEventListener("click", (e) => {
      e.preventDefault();
      createModal(movie);
    });


    card.appendChild(movieGenres);
    card.appendChild(watchBtn);
    card.appendChild(modalButton);
    container.appendChild(card);
  });
}
//#endregion



//#region Create Modals
export function createModal(movie) {
  const existing = document.getElementById("modal");
  if (existing) existing.remove();

  const modal = document.createElement("dialog");


  const container = document.createElement("div");
  container.classList.add("dialogue-container");
  container.innerHTML = `
    <h2>${movie.name}</h2>

    <div class="movie-content">
      <img src="images/${movie.image}.webp" alt="${movie.name}" loading="lazy">

      <div class="movie-information">
        <p>Rated: <span>${movie.rating}</span></p>
        <p>Released: <span>${movie.released}</span></p>
        <p>Genres: <span>${movie.genres.join(", ")}</span></p>
        <p>${movie.description}</p>
      </div>
    </div>
  `;


  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
  closeBtn.addEventListener("click", () => {
    modal.close();
  });


  container.appendChild(closeBtn);
  modal.appendChild(container);
  document.body.appendChild(modal);
  modal.showModal();
}
//#endregion



//#region Footer
export function createFooterContent() {
  document.getElementById("currentYear").innerHTML = new Date().getFullYear();

  const updated = new Date(document.lastModified);
  const options = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("lastUpdated").textContent = updated.toLocaleDateString("en-US", options);
}
//#endregion


