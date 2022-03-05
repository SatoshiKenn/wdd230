const requestURL =
  "https://satoshikenn.github.io/wdd230/chamber/data/data.json";

const bus = document.querySelector(".bus");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const business = jsonObject["business"];
    business.forEach(displayBusiness);
  });

function displayBusiness(business) {
  let card = document.createElement("section");
  let logo = document.createElement("img");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");

  h2.textContent = `${business.name}`;
  p.innerHTML = `${business.address}<br/>
  ${business.phone}<br>
    ${business.city},<br/>
    ${business.website}`;

  logo.setAttribute("src", business.imageurl);
  logo.setAttribute("class", "blogo");
  logo.setAttribute("alt", `${business.name}'s Logo`);
  logo.setAttribute("loading", "lazy");

  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(p);

  bus.appendChild(card);
}
