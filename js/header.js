let navBtn = document.querySelector(".navShowBtn");
let navMenu = document.querySelector(".header-menu");
let closeNav = document.querySelector(".close-container");

navBtn.onclick = function(){
    navMenu.style.right = 0;
    document.querySelector("body").style.overflow = "hidden";
};
closeNav.onclick = function(){
    navMenu.style.right = "-300px";
    document.querySelector("body").style.overflow = "auto";
};