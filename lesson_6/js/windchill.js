let t = document.getElementById("temperature").innerText;
let s = document.getElementById("wind").innerText;
let temp = Number(t)
let speed = Number(s)

var w = 0.00
if (temp < 50 & speed > 3) var w = 35.74 + (0.06215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16));

document.getElementById("windchill").innerHTML = Math.round(w, 2);
