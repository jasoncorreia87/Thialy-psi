





class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
        });

    }

    handleClick(){
        
        this.navList.classList.toggle(this.activeClass);
        //this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }


    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar  = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();



var slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  var slides = document.getElementsByClassName("slider-wrapper")[0].getElementsByTagName("img");
  var dots = document.getElementsByClassName("slider-dot");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

var prevBtn = document.getElementsByClassName("slider-control-prev")[0];
var nextBtn = document.getElementsByClassName("slider-control-next")[0];

prevBtn.addEventListener("click", function() {
  showSlides(slideIndex - 1);
});

nextBtn.addEventListener("click", function() {
  showSlides(slideIndex + 1);
});




