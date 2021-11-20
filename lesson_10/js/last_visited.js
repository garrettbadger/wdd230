let now = Date.now()

let day1 = localStorage.setItem('date', now)
let test = localStorage.getItem('date')
// alert(test)



let lastVisited = window.localStorage.getItem('lastVisit');
if (lastVisited != 'undefined' && lastVisited != null) {
    const day = 24 * 60 * 60 * 1000;

    const numberOfDays = Math.floor((now - lastVisited) / day);

    if (numberOfDays === 0 || numberOfDays >= 2) {
        document.querySelector('.last_visited').textContent = `Time since last visit: ${numberOfDays} days ago`;
    }
    else if (numberOfDays === 1) {
        document.querySelector('.last_visited').textContent = `Time since last visit: ${numberOfDays} day ago`;
    }
}
else {
    document.querySelector('.last_visited').textContent = `Time since last visit: never`;
}

window.localStorage.setItem('lastVisit', now);