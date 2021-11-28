const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=3a3f5ad2113c8cab626ffe00ab5469a5&units=imperial'
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
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
    
        
    });

const apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=3a3f5ad2113c8cab626ffe00ab5469a5&units=imperial'
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
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
        
    let w = 0.00
    if (maxTemp <= 50 & windSpeed > 3) { w = 35.74 + (0.6215 * maxTemp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * maxTemp * (windSpeed ** 0.16))};
    document.getElementById("windchill").textContent = Math.round(w, 2);

    })
