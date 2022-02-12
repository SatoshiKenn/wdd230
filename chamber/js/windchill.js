let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = "";

if (t <= 10 && s > 4.8) {
  windchill = windChill(t, s);
  windchill = `${windchill}&#176;C`;
} else {
  windchill = "N/A";
}
// output
document.querySelector("#w").innerHTML = windchill;

function windChill(tempF, speed){
    windchill = (35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16));
    return windchill.toFixed(2);
}
