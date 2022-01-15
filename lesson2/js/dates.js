//Last date modified code
const lastmodified = document.querySelector("#lastmodified");
lastmodified.textContent = `Last Updated: ${document.lastModified}`;

//Get year code
const p_year = document.querySelector("#copyright");
const today = new Date();
const year = today.getFullYear();
p_year.innerHTML = `&copy; ${year} Kennette Guevara`;
