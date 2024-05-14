let creditForm = document.querySelector(".credit-card-page");
let cardNAme = document.getElementById("cardNAme");
let cardNumber = document.getElementById("cardNumber");
let expDate = document.getElementById("expDate");
let CVV = document.getElementById("CVV");
creditForm.onsubmit = function(e){
    if(cardNAme.value === "" && cardNumber.value === "" && expDate.value === "" && CVV.value === ""){
        e.preventDefault();
        document.getElementById("crText").classList.add("credit-error");
        document.getElementById("missed-form-group").classList.add("credit-error");
        creditForm.querySelectorAll(".form-group").forEach(function(item){
            item.classList.add("credit-error");
            item.querySelectorAll(".credit-span").forEach(function(item){
                item.style.display = 'inline-block'
            })
            });    
        }
}