
document.getElementById("currentYear").textContent = new Date().getFullYear();
const modified = new Date(document.lastModified);
const options = { year: "numeric", month: "long", day: "numeric" };
document.getElementById("lastModified").textContent = modified.toLocaleDateString("en-US", options);
