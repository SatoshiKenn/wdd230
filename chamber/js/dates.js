const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

/*Date in header*/
const datefieldUK = document.querySelector("#date");

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

/*Join chamber code*/
const day = now.getDay();

if (day == 1 || day == 2) {
  document.querySelector("#joinchamber").style.display = "block";
  console.log("Wednesday")
} else {
  document.querySelector("#joinchamber").style.display = "none";
}