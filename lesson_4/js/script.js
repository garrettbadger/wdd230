function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
let today = new Date();
document.getElementById("date").textContent = today.toLocaleDateString('en-UK', options);
