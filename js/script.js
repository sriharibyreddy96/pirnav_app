// // Navbar bars toggle
// const mobileMenu = document.getElementById('mobile-menu');
// const navLinks = document.querySelector('.nav-links');
// const dropdowns = document.querySelectorAll('.dropdown');

// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// // Dropdown toggle for mobile view
// dropdowns.forEach(dropdown => {
//     dropdown.addEventListener('click', () => {
//         dropdown.classList.toggle('active');
//     });
// });

// // Navbar Sticky
// window.onscroll = function() {
//     const navbar = document.querySelector('.navbar_nav');
//     const sticky = navbar.offsetTop;

//     if (window.pageYOffset > sticky) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// };

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');
const menuIcon = document.getElementById('menu-icon');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle the icon
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times'); // Show close icon
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars'); // Show hamburger icon
    }
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

// Gallery



let gallery_container = document.getElementById('gallery-container')

let gallery_img = [
    "../assets/gallery/resized-31.webp",
    "../assets/gallery/resized-32.webp",
    "../assets/gallery/resized-33.webp",
    "../assets/gallery/resized-34.webp",
    "../assets/gallery/resized-35.webp",
    "../assets/gallery/resized-36.webp",
    "../assets/gallery/resized-37.webp",
    "../assets/gallery/resized-38.webp",
    "../assets/gallery/resized-39.webp",
    "../assets/gallery/resized-40.webp",
    "../assets/gallery/resized-41.webp",
    "../assets/gallery/resized-42.webp",
]

gallery_img.map((img)=>{
    let newImg = document.createElement("img")
    newImg.setAttribute("src" , img)
    console.log(newImg);
    gallery_container.append(newImg)
})


about.onclick = ()=>{
    if (drop_down.style.display === "block") {
        drop_down.style.display = "none"
    } else {
        drop_down.style.display = "block"
    }
}


// Techstack


