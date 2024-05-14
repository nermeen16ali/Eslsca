let registerForm = document.getElementById("register-container");
let createAccount = document.getElementById("createAccount");
let phone = document.getElementById("phone");
let emailorphone = document.getElementById("emailorphone");
let password = document.getElementById("password");

let loginBtn = document.querySelector(".loginBtn");
let formsWrapperForm = document.querySelectorAll(".targetedForm");
let FormsBtns = document.querySelectorAll(".form-btn");
let FormBacks = document.querySelectorAll(".form-back");
const codes = document.querySelectorAll('.code-num');
FormBacks.forEach(function(btn){
    btn.onclick = function(){
        formsWrapperForm.forEach(function(form){
            if(form.getAttribute("data-id") === btn.getAttribute("data-target")){
                form.style.display = "block";
            } else{
                form.style.display = "none"
            }
        })
    }
})
FormsBtns.forEach(function(formBtn){
    formBtn.onclick = function(e){
    e.preventDefault();
    formsWrapperForm.forEach(function(form){
        if(form.getAttribute("data-id") === formBtn.getAttribute('data-target')){
            form.style.display = 'block';
            if(form.getAttribute("data-id") === "verify"){
                codes[0].focus();
                codes.forEach((input, index1) => {
                    input.addEventListener("keyup", (e) => {
                        const currentInput = input,
                        nextInput = input.nextElementSibling,
                        prevInput = input.previousElementSibling;
                        if(currentInput.value.length > 1){
                            currentInput.value = "";
                            return;
                        }
                        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
                            nextInput.removeAttribute("disabled");
                            nextInput.focus();
                        }
                        if(e.key === "Backspace"){
                            codes.forEach((input, index2) => {
                                if(index1 <= index2 && prevInput){
                                    input.setAttribute("disabled", true);
                                    currentInput.value = "";
                                    prevInput.focus();
                                }
                            })
                        }
                    })
                })
            }
        } else {
            form.style.display = 'none';
        }
    });
    }
})


// /* Create Account */
// createAccount.onsubmit = function(e){
//     if(phone.value === ""){
//         e.preventDefault();
//         document.getElementById("phoneError").classList.add("login-error");
//     }
// }

// /* Login*/
// registerForm.onsubmit = function(e){
//     if(emailorphone.value === "" && password.value === ""){
//         e.preventDefault();
//         registerForm.querySelectorAll(".form-group").forEach(function(item){
//             item.classList.add("login-error");
//             console.log(item)
//         })
//     }
// }