const notifOpen = document.getElementById("notifOpen");
const notifClose = document.getElementById("notifClose");
const notifMenu = document.getElementById("notifMenu");
notifOpen.onclick = function(){
    notifMenu.style.display = "block";
}
notifClose.onclick = function(){
    notifMenu.style.display = "none";
}