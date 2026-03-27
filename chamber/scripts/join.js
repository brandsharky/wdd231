
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



//#region Form
document.getElementById("timestamp").value = new Date().toISOString();
//#endregion



//#region Membership Levels
const container = document.getElementById("membership-level-titles");
const memberships = [
  {
    title: "Non-Profit Membership",
    level: "np",
    description: "Free for nonprofit organizations.",
    cost: "Free",
    benefits: "Free membership, Access to community events, Listing in business directory, Networking opportunities"
  },
  {
    title: "Bronze Membership",
    level: "bronze",
    description: "Basic events and small advertising.",
    cost: "$10.00/month",
    benefits: "All NP benefits, Basic business listing, Access to training workshops, Entry-level event discounts"
  },
  {
    title: "Silver Membership",
    level: "silver",
    description: "More exposure and event discounts.",
    cost: "$15.00/month",
    benefits: "All Bronze benefits, Featured listing in directory, Increased event discounts, Social media promotion"
  },
  {
    title: "Gold Membership",
    level: "gold",
    description: "Premium placement and full benefits.",
    cost: "$30.00/month",
    benefits: "All Silver benefits, Premium advertising opportunities, Free access to all events, Priority support and promotion, Sponsorship opportunities"
  },
];


function createMembershipCards() {
  memberships.forEach(membership => {
    const card = document.createElement("div");

    const title = document.createElement("h3");
    title.innerHTML = membership.title;

    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "Learn More";

    link.addEventListener("click", (e) => {
      e.preventDefault();
      createModal(membership);
    });

    card.appendChild(title);
    card.appendChild(link);
    container.appendChild(card);
  });
}


function createModal(membership) {
  const existing = document.getElementById("modal");
  if (existing) existing.remove();

  const modal = document.createElement("dialog");

  modal.innerHTML = `
    <div>
      <h3>${membership.title}</h3>
      <p>Cost: <strong>${membership.cost}</strong></p>
      <p>Description: ${membership.description}</p>
      <p>Benefits: ${membership.benefits}</p>
    </div>
  `;

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  modal.appendChild(closeBtn);
  document.body.appendChild(modal);
  modal.showModal();
}


createMembershipCards();
//#endregion



//#region Footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
//#endregion
