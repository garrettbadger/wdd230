const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=43.6121&lon=-116.3915&appid=3a3f5ad2113c8cab626ffe00ab5469a5&units=imperial';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        let api = jsObject;
        let currentTemp = api.current.temp;
        let currentCondition = api.current.weather[0].description;
        let currentHumidity = api.current.humidity;

        document.getElementById('currentTemp').textContent = `Temp: ${Math.round(currentTemp, 0)}°F`;
        document.getElementById('currentCondition').textContent = `Condition: ${currentCondition}`;
        document.getElementById('currentHumidity').textContent = `Humidity: ${currentHumidity}%`;
        document.getElementById('current_weather_img').setAttribute('src', `https://openweathermap.org/img/wn/${api.current.weather[0].icon}@2x.png` )
        

        // const five = jsObject.list.filter(item => item.dt.includes('18:00:00'));
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        let newDay = new Date().getDay()
        document.getElementById('today').textContent = daysOfWeek[newDay];
        // five.forEach((forecast, index) =>{
            for (let index = 0; index < 3; index++ ) {
            
            
            const imagesrc = `https://openweathermap.org/img/wn/${api.daily[index+1].weather[0].icon}@2x.png`
            const desc = api.daily[0].weather[0].description;
            //  index += 1;
            document.querySelector(`.day${index+1}`).textContent = daysOfWeek[newDay+=1];
            document.querySelector(`.forecast_weather${index+1}`).textContent = `${api.daily[index+1].temp['day'].toFixed(0)}°F`;
            document.querySelector(`.forecast_icon${index+1}`).setAttribute('src', imagesrc)
            document.querySelector(`.forecast_icon${index+1}`).setAttribute('alt', desc)
        }
    });