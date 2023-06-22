const navToggle= document.querySelector(".nav-toggle");
const navToggleManu= document.querySelector(".main-nav .nav-links ul")
const navToggleCls= document.querySelector(".nav-links ul .Xmark")

navToggle.addEventListener("click", ()=>{
    navToggleManu.style.display= "block"
    navToggle.style.display= "none"
})

navToggleCls.addEventListener("click", ()=>{
    navToggleManu.style.display= "none";
    navToggle.style.display= "block"
})
