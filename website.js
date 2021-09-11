const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");
const rightNav = document.querySelector(".rightNav");

burger.addEventListener("click",function(){
    navbar.classList.toggle("height");
    navList.classList.toggle("visible");
    rightNav.classList.toggle("visible");
})