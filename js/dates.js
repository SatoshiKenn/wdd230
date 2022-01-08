//Last date modified code
const lastmodified = document.querySelector("#lastmodified");
lastmodified.textContent = `Last Modified: ${document.lastModified}`;

//Get year code
const p_year = document.querySelector("#copyright");
const today = new Date()
const year = today.getFullYear()
p_year.textContent += `${year}`;