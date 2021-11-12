
function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
let today = new Date();
document.getElementById("date").textContent = today.toLocaleDateString('en-UK', options);

if (today.getDay() == 5) {
    document.querySelector("#pancakes").style.display = "block"; 
    
}

document.querySelector('.exit').addEventListener('click', () => { 
    document.querySelector("#pancakes").style.display = "none"; 
    
}, false);

function adjustRating(rating) {
    document.getElementById("stormvalue").innerHTML = rating;
}

// JSON
const requestURL = 'towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
 
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0; i < 4; i++ ) {
        let i2 = 0;
        let card = document.createElement('section');
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
        p2.textContent = towns[i2].yearFounded;
        p3.textContent = towns[i2].currentPopulation;
        p4.textContent = towns[i2].averageRainfall;
        img.setAttribute('src', towns[i2].photo);
        img.setAttribute('alt', h2.textContent);
        }
        else if (i == 2){
            i2 = 6;
        h2.textContent = towns[i2].name;
        p1.textContent = towns[i2].motto;
        p2.textContent = towns[i2].yearFounded;
        p3.textContent = towns[i2].currentPopulation;
        p4.textContent = towns[i2].averageRainfall;
        img.setAttribute('src', towns[i2].photo);
        img.setAttribute('alt', h2.textContent);
        
        }
        else if(i == 0){
            i2 = 0;
        h2.textContent = towns[i2].name;
        p1.textContent = towns[i2].motto;
        p2.textContent = towns[i2].yearFounded;
        p3.textContent = towns[i2].currentPopulation;
        p4.textContent = towns[i2].averageRainfall;
        img.setAttribute('src', towns[i2].photo);
        img.setAttribute('alt', h2.textContent);
        }

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);
    
    }
  });


  