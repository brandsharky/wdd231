
//#region Header and Navbar
const navbutton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navBar.classList.toggle('show');
})
//#endregion



//#region Footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
const modified = new Date(document.lastModified);
const options = { year: "numeric", month: "long", day: "numeric" };
document.getElementById("lastModified").textContent = modified.toLocaleDateString("en-US", options);

//#endregion







