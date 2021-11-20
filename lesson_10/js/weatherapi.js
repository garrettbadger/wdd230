const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=3a3f5ad2113c8cab626ffe00ab5469a5&units=imperial'
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const five = jsObject.list.filter(item => item.dt_txt.includes('18:00:00'));
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        
        five.forEach((forecast, index) =>{
            const day = forecast.dt_txt;
            let newDay = new Date(day).getDay()
            const imagesrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
            const desc = forecast.weather[0].description;
            index += 1;
            document.querySelector(`.day${index}`).textContent = daysOfWeek[newDay];
            document.querySelector(`.forecast_weather${index}`).textContent = `${forecast.main.temp.toFixed(0)}°F`;
            document.querySelector(`.forecast_icon${index}`).setAttribute('src', imagesrc)
            document.querySelector(`.forecast_icon${index}`).setAttribute('alt', desc)
        })
          // note the concatenation
          // note how we reference the weather array
        // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        // document.getElementById('icon').setAttribute('alt', desc);

        
    });

const apiURL2 = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=3a3f5ad2113c8cab626ffe00ab5469a5&units=imperial'
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let temp = jsObject.main.temp;
        const desc = jsObject.weather[0].description;
        // getting the current conditions
        document.getElementById('currently').textContent = desc + " " + Math.floor(temp)
        // getting the max temp
        const maxTemp = jsObject.main.temp_max
        document.getElementById('temperature').textContent = Math.floor(maxTemp)
        // getting the windspeed
        const windSpeed = jsObject.wind.speed
        document.getElementById('wind').textContent = windSpeed
        // getting the humidity
        const humidity = jsObject.main.humidity
        document.getElementById('humidity').textContent = humidity
        // windchill
        let t = document.getElementById("temperature").innerText;
    let s = document.getElementById("wind").innerText;
    let temp1 = Number(t)
    let speed = Number(s)

    var w = 0.00
    if (temp1 <= 50 & speed > 3) {var w = 35.74 + (0.6215 * temp1) - (35.75 * (speed ** 0.16)) + (0.4275 * temp1 * (speed ** 0.16))};
    console.log(w)
    document.getElementById("windchill").textContent = Math.round(w, 2);

    })
