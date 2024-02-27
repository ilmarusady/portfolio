// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// klik di window
window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }
});

// pindah toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = false;
  } else {
    darkToggle.checked = true;
  }

// typewriter
var typed = new Typed('#typewriter', {
    strings: ["Web Developer", "Coder", "Tech Antusiast"],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true,
    // startDelay : 1000,
    backDelay : 1700
  });

// Swiper.js
let swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    // slidesPerView : 3,
    spaceBetween : 24,
    grabCursor : true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: -3,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: -3,
        },
    },
    mousewheel: true,
    keyboard: true,
});