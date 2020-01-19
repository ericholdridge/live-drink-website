/* --------- Nav Section ---------- */
// Sticky scroll to nav
window.onscroll = function() {
  myFunction();
};

let navbar = document.getElementById("navbar");
let navContainer = document.getElementById("nav-container");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed");
    navbar.classList.add("nav-bg");
    navContainer.classList.remove("lg:border-t");
    navContainer.classList.remove("lg:border-b");
    navContainer.classList.remove("xl:mt-4");
  } else {
    navbar.classList.remove("fixed");
    navbar.classList.remove("nav-bg");
    navContainer.classList.add("lg:border-t");
    navContainer.classList.add("lg:border-b");
    navContainer.classList.add("xl:mt-4");
  }
}

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
