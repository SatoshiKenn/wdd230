const requestURL =
  "https://satoshikenn.github.io/wdd230/chamber/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const spotlight = jsonObject["businesses"];
    let valid = true;
    while (valid) {
      let random1 = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
      let random2 = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
      let random3 = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
      if (random1 !== random2 && random2 !== random3 && random1 !== random3) {
        if (
          spotlight[random1].level != spotlight[random2].level &&
          spotlight[random2].level != spotlight[random3].level &&
          spotlight[random1].level != spotlight[random3].level
        ) {
          if (
            spotlight[random1].level == "gm" &&
            spotlight[random2].level == "sm" &&
            spotlight[random3].level == "bm"
          ) {
            displaySpotlight1(spotlight[random1]);
            displaySpotlight1(spotlight[random2]);
            displaySpotlight1(spotlight[random3]);
            valid = false;
          }
        }
      }
    }
  });

function displaySpotlight1(spotlight) {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "spotlight1");
  let spotlighth3 = document.createElement("h1");
  let spotlightimg = document.createElement("img");
  let divcontact = document.createElement("spotlight-contact");
  let pphone = document.createElement("p");
  let psite = document.createElement("p");

  spotlighth3.textContent = `${spotlight.name}`;
  pphone.innerHTML = `${spotlight.phone}`;
  psite.innerHTML = `${spotlight.website}`;

  spotlightimg.setAttribute("src", spotlight.imageurl);
  spotlightimg.setAttribute("alt", `logo of ${spotlight.name}}`);
  spotlightimg.setAttribute("loading", "lazy");
  spotlightimg.setAttribute("class", "spotlightlogo");

  div1.appendChild(spotlighth3);
  div1.appendChild(spotlightimg);
  div1.appendChild(divcontact);
  divcontact.appendChild(pphone);
  divcontact.appendChild(psite);
  console.log(spotlight.level);
  document.querySelector("div.spotlight").appendChild(div1);
}
