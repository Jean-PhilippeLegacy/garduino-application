// JavaScript Document

//self executing anonymous function

(function(){
    "use strict";
    console.log("SEAF Fired");

    var button = document.querySelector("#button");
    var burgerMenu = document.querySelector("#burgerMenu");
    var button = document.querySelector("#button");
    var burgerMenu = document.querySelector("#burgerMenu");

    var rootsImg = document.querySelector("#circuit-roots-img");
    var crl1 = document.querySelector("#key-features-crl-1");
    var crl2 = document.querySelector("#key-features-crl-2");
    var crl3 = document.querySelector("#key-features-crl-3");

    var aboutLink = document.querySelector("#about-link");
    var productLink = document.querySelector("#product-link");
    var featuresLink = document.querySelector("#features-link");
    var usageLink = document.querySelector("#usage-link");
    var contactLink = document.querySelector("#contact-link");

    var buyNow = document.querySelector("#buy-now-btn");
    var lightBox = document.querySelector("#light-box-message");
    var lightBoxClose = document.querySelector("#light-box-msg-close");
    var i;

    function hamburgerMenu(){
        burgerMenu.classList.toggle("slideToggle");
        button.classList.toggle("expanded");
    }

    function scrollFunction(){
        var rootDifference = rootsImg.getBoundingClientRect().top - window.innerHeight + 100;
        var crl1Difference = crl1.getBoundingClientRect().top - window.innerHeight + 100;
        var crl2Difference = crl2.getBoundingClientRect().top - window.innerHeight + 100;
        var crl3Difference = crl3.getBoundingClientRect().top - window.innerHeight + 100;

        if(rootDifference < 0){
            rootsImg.classList = "scrolled";
        }
        if(rootDifference > 0){
            rootsImg.classList = "";
        }

        if(crl1Difference < 0){
            crl1.classList = "key-features-circle crl-animate";
        }

        if(crl2Difference < 0){
            crl2.classList = "key-features-circle crl-animate";
        }

        if(crl3Difference < 0){
            crl3.classList = "key-features-circle crl-animate";
        }
    }

    function scrollTo(e){
        console.log(e.target.id);
        hamburgerMenu();
        if(e.target.id == 'about-link'){
            TweenMax.to(window, 1, {scrollTo:{y:"#our-roots", offsetY:100}});
        }
        if(e.target.id == 'product-link'){
            TweenMax.to(window, 1, {scrollTo:{y:"#product", offsetY:150}});
        }
        if(e.target.id == 'features-link'){
            TweenMax.to(window, 1, {scrollTo:{y:"#feature-img-divider", offsetY:100}});
        }
        if(e.target.id == 'usage-link'){
            TweenMax.to(window, 1, {scrollTo:{y:"#how-it-works", offsetY:150}});
        }
        if(e.target.id == 'contact-link'){
            TweenMax.to(window, 1, {scrollTo:{y:"#contact", offsetY:100}});
        }
    }

    function lightBoxMsg() {
        lightBox.classList.toggle("hidden");
    }

    button.addEventListener("click",hamburgerMenu,false);
    window.addEventListener("scroll",scrollFunction,false);

    aboutLink.addEventListener("click",scrollTo,false);
    productLink.addEventListener("click",scrollTo,false);
    featuresLink.addEventListener("click",scrollTo,false);
    usageLink.addEventListener("click",scrollTo,false);
    contactLink.addEventListener("click",scrollTo,false);

    buyNow.addEventListener("click",lightBoxMsg,false);
    lightBoxClose.addEventListener("click",lightBoxMsg,false);
})();


