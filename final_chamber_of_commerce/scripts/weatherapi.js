const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.6121&lon=-116.3915&appid=3a3f5ad2113c8cab626ffe00ab5469a5&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        let weather = jsObject;
        let currentTemp = weather.current.temp;
        let currentCondition = weather.current.weather[0].description;
        let currentHumidity = weather.current.humidity;

        document.getElementById('currentTemp').textContent = Math.round(currentTemp, 0);
        document.getElementById('currentCondition').textContent = currentCondition;
        document.getElementById('currentHumidity').textContent = currentHumidity;
    });