const apiSource = "directory.json"

fetch(apiSource)
    .then((response) => response.json())
    .then((jsObject) => {
    const business = jsObject['businesses'];
    
    business.forEach((business) => {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let a = document.createElement('a');

        let img = document.createElement('img');

        h3.textContent = business.name;
        p1.textContent = business.description;
        p2.textContent = business.contact;
        a.href = business.website;
        a.textContent = h3.textContent + ' Website';
        img.setAttribute('src', business.logo);
        img.setAttribute('alt', h3.textContent + 'logo');

        card.appendChild(img);
        card.appendChild(h3);
        
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(a);
        

        document.querySelector('div.directory').appendChild(card);
        
    });  
        
    
    

})