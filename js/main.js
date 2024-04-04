let rightButton=document.querySelector(".right-button");
let leftButton=document.querySelector(".left-button");
let section=document.querySelectorAll(".sectionn");
let index=0;
rightButton.addEventListener("click",function(){
    section[index].classList.remove("active");
    index++;
    if(index>=section.length){
        index=0;
    }
    section[index].classList.add("active");
})
leftButton.addEventListener("click",function(){
    section[index].classList.remove("active");
    index--;
    if(index<0){
        index=section.length-1;
    }
    section[index].classList.add("active");
})