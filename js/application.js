/*Popup */
let closePopup = document.querySelectorAll(".colsePopupBtn");
let colsePopupBtn02 = document.querySelector(".colsePopupBtn02");
let popup01 =  document.querySelector(".popup01");
let popup02 = document.querySelector(".popup02");
closePopup.forEach((close) => {
    close.addEventListener("click", function(){
        document.querySelector("body").style.overflowY = 'auto';
        popup01.style.display = 'none';
    })
})
let openPopup = document.getElementById("openPopup");
openPopup.onclick = function(){
    document.querySelector("body").style.overflowY = 'hidden';
    popup01.style.display = 'block';
}
let popup02Btn = document.getElementById("popup02");
popup02Btn.addEventListener("click", function(){
    popup01.style.display = 'none';
    popup02.style.display = 'block';
})
colsePopupBtn02.addEventListener("click", function(){
    document.querySelector("body").style.overflowY = 'auto';
    popup02.style.display = 'none';
})