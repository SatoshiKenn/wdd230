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

/*form date*/
const formdate = new Date()
let date = formdate.getFullYear()+'-'+(formdate.getMonth()+1)+'-'+formdate.getDate(); /*getMonth starts in 0 that is why we add 1 to show the correct number of the month*/
document.querySelector('#formdate').value = date;

/*switch (day) {
  case 0:
    document.querySelector("#joinchamber").style.display = "none";
    console.log("Sunday")
    break;
  case 1:
    document.querySelector("#joinchamber").style.display = "block";
    console.log("Monday")
    break;
  case 2:
    document.querySelector("#joinchamber").style.display = "block";
    console.log("Tuesday")
    break;
  case 3:
    document.querySelector("#joinchamber").style.display = "none";
    console.log("Wednesday")
    break;
  case 4:
    document.querySelector("#joinchamber").style.display = "none";
    console.log("Thursday")
    break;
  case 5:
    document.querySelector("#joinchamber").style.display = "none";
    console.log("Friday")
    break;
  case 6:
    document.querySelector("#joinchamber").style.display = "none";
    console.log("Saturday");
}*/
