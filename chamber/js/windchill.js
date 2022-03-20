const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=3871336&appid=3755650b1c53c50d6c91c306ae05d912&units=metric";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
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

/*Celsius*/
function windChill(tempC, speed) {
  let windchill =
    13.2 +
    0.6215 * tempC -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * tempC * Math.pow(speed, 0.16);
  return windchill.toFixed(2);
}
