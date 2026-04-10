import { createResponsiveNavbar, themeToggle, createFooterContent } from "./functions.js";



//#region Header and Navigation
document.addEventListener("DOMContentLoaded", () => {
  createResponsiveNavbar();
  themeToggle();
})
//#endregion



//#region Results
const formInfo = new URLSearchParams(window.location.search);


let genres;
if (formInfo.get("genres") === null) {
  genres = "None Selected";
} else {
  genres = formInfo.getAll("genres").join(", ");
}


document.getElementById("results").innerHTML = `
  <h2>Thank You, <span>${formInfo.get("fname")}</span>!</h2>
  <p>Name: <span>${formInfo.get("fname")} ${formInfo.get("lname")}</span></p>
  <p>Email: <span>${formInfo.get("email")}</span></p>

  <p>Movie Title: <span>${formInfo.get("movietitle")}</span></p>
  <p>Movie Genres: <span>${genres}</span></p>
  <p>Submitted: <span>${formInfo.get("timestamp")}</span></p>

  <a href="expand.html">< Back to Expand Page</a>
`;
//#endregion



//#region Footer
document.addEventListener("DOMContentLoaded", () => {
  createFooterContent();
})
//#endregion


