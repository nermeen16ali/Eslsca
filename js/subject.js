let subjectBtns = document.querySelectorAll(".subjects-gallery button");
let subjectContents = document.querySelectorAll(".subject-content p");
subjectBtns.forEach(function(subjectBtn){
    subjectBtn.onclick = function(){
        subjectBtns.forEach(function(btn){
            btn.classList.remove("active");
        });
        this.classList.add("active");
        subjectContents.forEach(function(p){
            if(p.getAttribute("data-subject") === subjectBtn.getAttribute("data-target")){
                p.style.display = 'block';
            } else{
                p.style.display = 'none';
            }
        })
    }
})