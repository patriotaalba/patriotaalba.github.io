const burger = document.querySelector('.burger');
const line1 = document.querySelector('.burger .line-satu');
const line2 = document.querySelector('.burger .line-dua');
const line3 = document.querySelector('.burger .line-tiga');
const burgerDiv = document.querySelector('.burger div')
const resNav = document.querySelector('.res-nav');

burger.addEventListener("click", function(){
    resNav.style.transform = "translateX(0%)";
    line1.style.transform = "scale(0)";
    line2.style.transform = "scale(0)";
    line3.style.transform = "scale(0)";
});

resNav.addEventListener("click", function(){
    resNav.style.transform = "translateX(100%)";
    line1.style.transform = "scale(1)";
    line2.style.transform = "scale(1)";
    line3.style.transform = "scale(1)";
});