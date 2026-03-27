
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



//#region User Info
const formInfo = new URLSearchParams(window.location.search);
document.getElementById("thankYou").innerHTML = `
  <h2>Your Information</h2>
  <p>Name: ${formInfo.get("fname")} ${formInfo.get("lname")}</p>
  <p>Email: ${formInfo.get("email")}</p>
  <p>Phone: ${formInfo.get("phonenumber")}</p>
  <p>Organization: ${formInfo.get("orgname")}</p>
  <p>Submitted: ${formInfo.get("timestamp")}</p>
`;
//#endregion



//#region Footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
//#endregion
