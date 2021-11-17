const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid={3a3f5ad2113c8cab626ffe00ab5469a5}'
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });