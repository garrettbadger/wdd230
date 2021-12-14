function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}
let i = 2;
function toggleDirectory(){
    document.getElementById("directory").classList.toggle("grid");
    let text = document.getElementById("icon");
    
    if (i % 2 != 1 ){
        text.innerHTML = "&#xe3ec;"
        i++
    }
    else{
        text.innerHTML = "&#xe241;"
        i++
    }
    
}