import { places } from "../data/places.mjs";

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



//#region Visit Message
const message = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);
//#endregion



//#region Discover Places
const container = document.getElementById("discover-places");

places.forEach(place => {
  const card = document.createElement("div");
  card.classList.add("place");

  card.innerHTML = `
    <h2>${place.name}</h2>
    <div class="place-content">
      <figure>
        <img src="${place.photo}" alt="${place.name}" loading="lazy" width="300" height="200">
      </figure>
      <div class="place-text">
        <address>${place.address}</address>
        <p>
          ${place.description}
        </p>
      </div>
    </div>
    <a href="${place.link}" target="_blank" rel="noopener noreferrer">Learn more about ${place.name}</a>
  `;

  container.appendChild(card);
});
//#endregion



//#region Footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
//#endregion
