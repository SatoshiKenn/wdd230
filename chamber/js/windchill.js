const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=3871336&appid=3755650b1c53c50d6c91c306ae05d912&units=metric";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector("#t").textContent = jsObject.main.temp.toFixed(1);
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    const speed = jsObject.wind.speed;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("#figcaption").textContent = desc;
    document.querySelector("#s").textContent = speed;
    let windchill = "";
    if (jsObject.main.temp.toFixed(1) <= 10 && speed > 4.8) {
      windchill = windChill(jsObject.main.temp.toFixed(1), speed);
      windchill = `${windchill}&#176;C`;
    } else {
      windchill = "N/A";
    }
    document.querySelector("#w").innerHTML = windchill;
  });

/*let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = "";

if (t <= 10 && s > 4.8) {
  windchill = windChill(t, s);
  windchill = `${windchill}&#176;C`;
} else {
  windchill = "N/A";
}
// output
*/
/*Celsius*/
function windChill(tempC, speed) {
  let windchill =
    13.2 +
    0.6215 * tempC -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * tempC * Math.pow(speed, 0.16);
  return windchill.toFixed(2);
}

/*Fahrenheit
function windChill(tempF, speed){
    windchill = (35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16));
    return windchill.toFixed(2);
}
*/
