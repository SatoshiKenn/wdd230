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
    business.forEach(displayBTable);
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

function displayBTable(business) {
  let table = document.querySelector(".businesstable");
  let row = document.createElement("tr");
  let tdName = document.createElement("td");
  let tdAddress = document.createElement("td");
  let tdPhone = document.createElement("td");
  let tdWebsite = document.createElement("td");
  let thName = document.createElement("th");
  thName.textContent = "Name";


  tdName.innerHTML = `${business.name}`;
  tdAddress.innerHTML = `${business.address}`;
  tdPhone.innerHTML = `${business.phone}`;
  tdWebsite.innerHTML = `${business.website}`
  row.appendChild(tdName);
  row.appendChild(tdAddress);
  row.appendChild(tdPhone);
  row.appendChild(tdWebsite);
  tbody.appendChild(row);

  table.appendChild(tbody);

  document.querySelector(".btable").appendChild(table);
}

/*function displayBTable(business) {
  let table = document.querySelector(".businesstable");
  let row = document.createElement("tr");
  let information = document.createElement("td");

  information.innerHTML = `${business.name}<br> Address: ${business.address}<br>${business.city}<br>Phone: ${business.phone}<br>${business.website}`;
  row.appendChild(information);
  tbody.appendChild(row);

  table.appendChild(tbody);

  document.querySelector(".btable").appendChild(table);
}
}*/
