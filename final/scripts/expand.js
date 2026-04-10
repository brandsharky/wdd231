import { createResponsiveNavbar, themeToggle, createFooterContent } from "./functions.js";



//#region Header and Navigation
document.addEventListener("DOMContentLoaded", () => {
  createResponsiveNavbar();
  themeToggle();
})
//#endregion



//#region Form
document.getElementById("timestamp").value = new Date().toISOString();
//#endregion



//#region Footer
document.addEventListener("DOMContentLoaded", () => {
  createFooterContent();
})
//#endregion


