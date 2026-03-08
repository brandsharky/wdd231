const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.getElementById("cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data);

  displayProphets(data.prophets);
}


const displayProphets = (prophets) => {
  prophets.forEach(prophet => {
    let card = document.createElement("section");

    let fullName = document.createElement("h2");
    fullName.textContent = ` ${prophet.order}. ${prophet.name} ${prophet.lastname}`;

    let portrait = document.createElement("img");
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', 340);
    portrait.setAttribute('height', 440);

    let facts = document.createElement("ul");
    let fact1 = document.createElement("li");
    fact1.textContent = `Born: ${prophet.birthdate}`;
    facts.appendChild(fact1);
    let fact2 = document.createElement("li");
    fact2.textContent = `Birthplace: ${prophet.birthplace}`;
    facts.appendChild(fact2);
    let fact3 = document.createElement("li");
    fact3.textContent = `Death: ${prophet.death ? prophet.death : "Living"}`;
    facts.appendChild(fact3);


    card.appendChild(fullName);
    card.appendChild(portrait);
    card.appendChild(facts);

    cards.appendChild(card);
  });
}

getProphetData();