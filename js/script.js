const burger = document.querySelector('.burger');
const line1 = document.querySelector('.burger .line-satu');
const line2 = document.querySelector('.burger .line-dua');
const line3 = document.querySelector('.burger .line-tiga');
const burgerDiv = document.querySelector('.burger div')
const resNav = document.querySelector('.res-nav');
const about = document.querySelector('.about')
const aboutNav = document.querySelector('.right-side ul li:nth-child(4)')
const aboutResNav = document.querySelector('.res-nav ul li:nth-child(4)')
const closeBtn = document.querySelector('.close-btn')
const body = document.querySelector('body')


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

aboutNav.addEventListener("click", function() {
    about.style.transform = "scale(1)"
})

aboutResNav.addEventListener("click", function() {
    about.style.transform = "scale(1)"
})

closeBtn.addEventListener("click", function() {
    about.style.transform = "scale(0)"
})
