const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();


let datemodified = document.getElementById("lastmodified");
datemodified.textContent = new Date(document.lastModified); 