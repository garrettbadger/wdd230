const requestURL = 'towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
 
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < 3; i++ ) {
        let i2 = 0;
        let card = document.createElement('section');
        let data = document.createElement('div')
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let img = document.createElement('img');
        if (i == 1){
            i2 = 2;
        h2.textContent = towns[i2].name;
        p1.textContent = towns[i2].motto;
        p2.textContent = 'Year founded: ' + towns[i2].yearFounded;
        p3.textContent = 'Current population: ' + towns[i2].currentPopulation;
        p4.textContent = 'Average rainfall: ' + towns[i2].averageRainfall;
        img.setAttribute('src', 'images/card_fish_haven_cropped.jpg');
        img.setAttribute('alt', h2.textContent);
        }
        else if (i == 2){
            i2 = 6;
        h2.textContent = towns[i2].name;
        p1.textContent = towns[i2].motto;
        p2.textContent = 'Year founded: ' + towns[i2].yearFounded;
        p3.textContent = 'Current population: ' + towns[i2].currentPopulation;
        p4.textContent = 'Average rainfall: ' + towns[i2].averageRainfall;
        img.setAttribute('src', 'images/card_preston_cropped.jpg');
        img.setAttribute('alt', h2.textContent);
        
        }
        else if(i == 0){
            i2 = 0;
        h2.textContent = towns[i2].name;
        p1.textContent = towns[i2].motto;
        p2.textContent = 'Year founded: ' + towns[i2].yearFounded;
        p3.textContent = 'Current population: ' + towns[i2].currentPopulation;
        p4.textContent = 'Average rainfall: ' + towns[i2].averageRainfall;
        img.setAttribute('src', 'images/card_soda_springs.jpg');
        img.setAttribute('alt', h2.textContent);
        }

        data.appendChild(h2);
        data.appendChild(p1);
        data.appendChild(p2);
        data.appendChild(p3);
        data.appendChild(p4);
        
        card.appendChild(img);
        card.appendChild(data)

        document.querySelector('div.cards').appendChild(card);
        // document.querySelector('div.cards').appendChild(data);
        // document.querySelector('div.cards').appendChild(img)
    }
  });
