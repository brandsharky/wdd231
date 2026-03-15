
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



//#region Directory
const container = document.querySelector("#members");

function displayMembers(companies) {
  container.innerHTML = "";

  companies.forEach(company => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    const name = document.createElement("h2");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const membership = document.createElement("p");

    name.textContent = company.name;
    address.textContent = company.address;
    address.classList.add("address");
    phone.textContent = company.phone;

    website.textContent = "Visit Website";
    website.href = company.website;
    website.target = "_blank";
    website.rel = "noopener noreferrer";

    image.src = `images/${company.image}.webp`;
    image.alt = `${company.name} logo`;
    image.width = 175;
    image.height = 175;
    image.loading = "lazy";

    membership.classList.add("membership");
    membership.textContent = `${company.membership}`;


    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    container.appendChild(card);
  });
}


async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.members);
}


getMembers();


const gridbutton = document.getElementById("gridBtn");
const listbutton = document.getElementById("listBtn");

gridbutton.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});
//#endregion



//#region Footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
//#endregion
