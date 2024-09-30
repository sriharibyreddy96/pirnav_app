// Navbar bars toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dropdown toggle for mobile view
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
});

// Navbar Sticky
window.onscroll = function() {
    const navbar = document.querySelector('.navbar_nav');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};


// let header = document.getElementById('header')
// let logo = document.getElementById('logo')
// let menuList = document.getElementById('sub-list-nav')

// window.addEventListener('scroll' , ()=>{
//     let scrollValue = window.scrollY
//     console.log(scrollValue);
//     if (scrollValue < 100) {
//         header.classList.remove('bgColor')
//         logo.removeAttribute('src')
//         logo.setAttribute('src' , './assets/logo-dark-new-04.svg')
//         logo.style.width = '22%'
//         menuList.style.color = '#fff'
//     } else {
//         header.classList.add('bgColor')
//         logo.removeAttribute('src')
//         logo.setAttribute('src' , './assets/logo-light-new-05.svg')
//         logo.style.width = '20%'
//         menuList.style.color = '#000'
//     }
    
// })


// const mediaQuery = window.matchMedia('(max-width: 600px)');

// function handleMediaChange(e) {
//   if (e.matches) {
//     console.log('Mobile view activated');
//     let scrollValue = window.scrollY
//     console.log(scrollValue);
//     if (scrollValue < 20) {
//         header.classList.remove('bgColor')
//         logo.removeAttribute('src')
//         logo.setAttribute('src' , '../assets/logo-dark-new-04.svg')
//         logo.style.width = '22%'
//         menuList.style.color = '#fff'
//     } else {
//         header.classList.add('bgColor')
//         logo.removeAttribute('src')
//         logo.setAttribute('src' , '../assets/logo-dark.png')
//         logo.style.width = '20%'
//         menuList.style.color = '#000'
//     }
//   } else {
//     console.log('Desktop view activated');
//   }
// }

// Initial check
// handleMediaChange(mediaQuery);

// Listen for changes
// mediaQuery.addListener(handleMediaChange);

  