import { temples, url} from "../data/temples.js";



const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myinfo = document.querySelector("#mydialog p");
const myclose = document.querySelector("#mydialog button");


myclose.addEventListener("click", () => {
  mydialog.close();
})


function displayItems(data) {
  data.forEach(temple => {
    const photo = document.createElement("img");
    photo.src = `${url}${temple.path}`;
    photo.alt = temple.name;
    photo.addEventListener("click", () => showStuff(temple));



    showHere.appendChild(photo);
  });
}


function showStuff(x) {
  mytitle.innerHTML = x.name;
  myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as a temple number ${x.number}`;
  mydialog.showModal();
}



displayItems(temples);


