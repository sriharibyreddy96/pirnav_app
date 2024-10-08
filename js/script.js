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



// ==================================================
// JavaScript to handle Scroll to Top functionality
// ===================================================

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show the button when the user scrolls down
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = 'block';  // Show the button
        } else {
            scrollToTopBtn.style.display = 'none';  // Hide the button
        }
    });

    // Scroll the page to the top smoothly when button is clicked
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Enables smooth scrolling
        });
    });
});

// ==================================================
// Number says a lot Count Up Fynctionality
// ==================================================

document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.data-number'); 

    // Function to animate the count-up
    function countUp(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 50); 

        const interval = setInterval(() => {
            start += increment; 
            if (start >= target) {
                clearInterval(interval); 
                start = target; 
            }
            element.innerHTML = Math.floor(start) + "<sup>+</sup>";
        }, 50); 
    }

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const counters = section.querySelectorAll('.data-number'); 
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    countUp(counter, target, 2000); // Count up over 3 seconds
                });
                observer.unobserve(section); 
            }
        });
    }, { threshold: 0.5 }); 

    // Start observing the data-section
    const section = document.getElementById('data-section');
    observer.observe(section);
});
  
// ===========================================
// Gallery Images Mapping from JS to HTML
// ===========================================

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

  
  


