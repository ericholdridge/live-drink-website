/* --------- Nav Section ---------- */
// Mobile dropdown menu
let mobileNav = document.querySelector('.mobile-nav');
let mobileMenu = document.getElementById('bars');
const ellipsisIcon = document.querySelector('.fa-ellipsis-v');
const ellipsis = document.getElementById('ellipsis');

// Show and hide the ellipsis menu on mobile
ellipsisIcon.addEventListener('click', (e) => {
  e.preventDefault();
  ellipsis.classList.toggle('hidden');
});

ellipsis.addEventListener('click', (e) => {
  e.preventDefault();
  ellipsis.classList.toggle("hidden");
})

mobileMenu.addEventListener('click', function(e){
  e.preventDefault();
  mobileNav.classList.toggle('hidden');
});

let prenav = document.getElementById("prenav");
let navbar = document.getElementById("navbar");
let navContainer = document.getElementById("nav-container");
let navbarLogo = document.getElementById('logo');
let shoppingCart = document.getElementById('shoppingCart');
let lgViewCartIcon = document.querySelector('.lg-cart-nav');
let cart_icon_lg_screen = document.querySelector('.cart-icon-lg-screen');

cart_icon_lg_screen.addEventListener('click', () => {
  ellipsis.classList.toggle("lg:block");
  ellipsis.classList.toggle("md:block");
  ellipsis.classList.toggle("sm:block");
})

function obCallback(payload) {
  // If the prevnav is completely hidden
  if(!payload[0].isIntersecting) {
    navbar.classList.add("fixed");
    navbar.classList.add("nav-bg");
    navContainer.classList.remove("lg:border-t");
    navContainer.classList.remove("lg:border-b");
    navContainer.classList.remove("xl:mt-4");
    navbarLogo.classList.remove("hidden");
    shoppingCart.classList.remove("hidden");
    lgViewCartIcon.classList.remove('hidden');
  } 
  else { // If the prenav is shown
    navbar.classList.remove("fixed");
    navbar.classList.remove("nav-bg");
    navContainer.classList.add("lg:border-t");
    navContainer.classList.add("lg:border-b");
    navContainer.classList.add("xl:mt-4");
    navbarLogo.classList.add("hidden");
    shoppingCart.classList.add("hidden");
    lgViewCartIcon.classList.add('hidden');
  }
}

const ob = new IntersectionObserver(obCallback);
ob.observe(prenav) // Observes the prenav

// Change the active state on nav-items
var ulContainer = document.getElementById("nav");
var navItems = ulContainer.getElementsByClassName("nav-item");

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("text-navActive");
    current[0].className = current[0].className.replace(" text-navActive", "");
    this.className += " text-navActive";
  });
}

/* ------- Organic Section --------- */
// Why organic dropdown menu
let dropdown = document.querySelectorAll('.organic-dropdown-link');
let dropdownHidden = document.querySelectorAll('.organic-hidden');

for(let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', () => {
    dropdownHidden[i].classList.toggle("hidden");
  });
}

/* ------- Our Team Section --------- */
// Scroll to top functionality 
const teamSection = document.getElementById("team");
const upArrow = document.getElementById("upArrow");

function showUpArrow(element) {
  // If the team section container is completely hidden
  if(element[0].isIntersecting) {
    let op = 0.1;  // initial opacity
    upArrow.style.display = 'block';
    let timer = setInterval(function () {
      if (op >= 1){
        clearInterval(timer);
    }
    upArrow.style.opacity = op;
    upArrow.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 10);
    upArrow.classList.remove("hidden");
  } 
  else { // If the team section container is shown
    let op = 1;  // initial opacity
    let timer = setInterval(function () {
      if (op <= 0.1){
        clearInterval(timer);
        upArrow.style.display = 'none';
      }
      upArrow.style.opacity = op;
      upArrow.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
    }, 5);
  }
}

const observer = new IntersectionObserver(showUpArrow);
observer.observe(teamSection) // Observes the prenav

/* -------- Sliders --------- */
// Home page carousel slider
window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      scrollLock: true,
      dots: '#dots',
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
    });
})

// Why Organic Image Slider
new Glider(document.querySelector('.organic-glider'), {
  slidesToShow: 1,
  dots: '#organic-dots',
  draggable: true,
  scrollLock: true,
});

// Section what people say slider
new Glider(document.querySelector('.glider-people-say'), {
  slidesToShow: 1,
  draggable: true,
  scrollLock: true,
  settings: {
    duration: 0.25,
  }
});

// 2:28















































