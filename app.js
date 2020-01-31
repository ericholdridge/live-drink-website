/* --------- Nav Section ---------- */
const nav = document.querySelector('nav');
let mobileNav = document.querySelector('.mobile-nav');
let mobileMenu = document.getElementById('bars');
const ellipsisIcon = document.querySelector('.fa-ellipsis-v');
const ellipsis = document.getElementById('ellipsis');
let prenav = document.getElementById("prenav");
let navbar = document.getElementById("navbar");
let navContainer = document.getElementById("nav-container");
let navbarLogo = document.getElementById('logo');
let shoppingCart = document.getElementById('shoppingCart');
let lgViewCartIcon = document.querySelector('.lg-cart-nav');
let cart_icon = document.querySelector('.cart-icon-lg-screen');
let cartItems = document.querySelector('.cart-items');
let shoppingStaticNav = document.getElementById('shoppingStaticNav');
let shoppingScrolled = document.getElementById('shoppingScrolled');
const smallScreenCart = document.querySelector('.smallScreenCart');



// If the cart icon is clicked, display the cart items in the bag
cart_icon.addEventListener('click', () => {
  ellipsis.classList.toggle("hidden")
});

// Mobile drop down navigation
mobileMenu.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.classList.toggle('hidden');
});

// Show cart on small screens
ellipsisIcon.addEventListener('click', (e) => {
  e.preventDefault();
  smallScreenCart.classList.toggle("hidden");
  smallScreenCart.style.marginTop = "10px";
  nav.classList.toggle("pb-3");
});

function obCallback(payload) {
  // If the page is scrolled and the prenav is hidden 
  if(!payload[0].isIntersecting) {
    navbar.classList.add("fixed");
    navbar.classList.add("nav-bg");
    navContainer.classList.remove("lg:border-t");
    navContainer.classList.remove("lg:border-b");
    navContainer.classList.remove("xl:mt-4");
    navbarLogo.classList.remove("hidden");
    shoppingCart.classList.remove("hidden");
    lgViewCartIcon.classList.remove('hidden');
    shoppingStaticNav.classList.remove('cart-items');
    shoppingScrolled.classList.add('cart-items');
    shoppingCart.addEventListener('click', () => {
      ellipsis.classList.toggle('hidden');
    });
  } else { // If the prenav is shown
    navbar.classList.remove("fixed");
    navbar.classList.remove("nav-bg");
    navContainer.classList.add("lg:border-t");
    navContainer.classList.add("lg:border-b");
    navContainer.classList.add("xl:mt-4");
    navbarLogo.classList.add("hidden");
    shoppingCart.classList.add("hidden");
    lgViewCartIcon.classList.add('hidden');
    cartItems.classList.add('cart-items');
  }
}

const ob = new IntersectionObserver(obCallback);
ob.observe(prenav) // Observes the prenav

// Change the active state color on nav-items
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
  } else { // If the team section container is shown
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















































