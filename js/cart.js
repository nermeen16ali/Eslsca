let couponInput = document.querySelector(".coupon-group input");
let activateBtn = document.getElementById('activate');
let deleteCodeBtn = document.getElementById('deleteCode');
let codeDiscount = document.querySelector(".coupon-discount");
activateBtn.onclick = () => {
    if(couponInput.value !== ""){
        activateBtn.classList.add('d-none');
        deleteCodeBtn.classList.remove('d-none');
        codeDiscount.classList.remove('d-none');
    }
}

deleteCodeBtn.onclick = () => {
    couponInput.value = "";
    deleteCodeBtn.classList.add('d-none');
    activateBtn.classList.remove('d-none');
    codeDiscount.classList.add('d-none');
}