const requestURL =
  "https://satoshikenn.github.io/wdd230/chamber/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const business = jsonObject["businesses"];
    business.forEach(displayBusiness);
  });

function displayBusiness(business) {
  let card = document.createElement("section");
  card.setAttribute("class", "bcard");

  let logo = document.createElement("img");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");

  h2.textContent = `${business.name}`;
  p.innerHTML = `${business.address}<br/>
    ${business.city}<br/>
    ${business.phone}</br>
    ${business.website}`;

  logo.setAttribute("src", business.imageurl);
  logo.setAttribute("alt", `${business.name}'s logo`);
  logo.setAttribute("loading", "lazy");
  logo.setAttribute("class", "blogo");

  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(p);

  document.querySelector("div.cards").appendChild(card);
}
