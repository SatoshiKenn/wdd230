//Get year code
const p_year = document.querySelector("#copyright");
const today = new Date();
const year = today.getFullYear();

//Last date modified code
const lastmodified = document.querySelector("#lastmodified");
lastmodified.innerHTML = `&copy; ${year} Progressive Loading of Images | Kennette Guevara | WDD 230 | Last Updated: ${document.lastModified}`;