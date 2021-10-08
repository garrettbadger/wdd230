function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
const today = new Date();
document.querySelector("#date").textContent = today.toLocaleDateString('en-UK', options);
