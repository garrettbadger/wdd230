const requestURL = 'towndata.json';


fetch(requestURL)
.then(function (response) {
  return response.json();
})

.then(function (jsonObject) {
  const towns = jsonObject['towns'];
  let div = document.createElement('div');
  let section = document.createElement('section');
  let heading = document.createElement('h3')
  let event1 = document.createElement('li');
  let event2 = document.createElement('li');
  let event3 = document.createElement('li');
  heading.textContent = 'Soda Spring Town Events';
  event1.textContent = towns[0].events[0];
  event2.textContent = towns[0].events[1];
  event3.textContent = towns[0].events[2];

  section.appendChild(heading);
  section.appendChild(event1);
  section.appendChild(event2);
  section.appendChild(event3);
  div.appendChild(section);
  document.querySelector('div.events').appendChild(div);


})
