function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
let today = new Date();
document.getElementById("date").textContent = today.toLocaleDateString('en-UK', options);

if (today.getDay() == 5) {
    document.querySelector("#pancakes").style.display = "block"; 
    document.querySelector("header").style.margin = '12em 0 0 0';
}

document.querySelector('.exit').addEventListener('click', () => { 
    document.querySelector("#pancakes").style.display = "none"; 
    document.querySelector("header").style.margin = '0em 0 0 0';
}, false);
