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


// Industries

let industries = [
    {
        "id" : "healthcare-card" , 
        "svg" : `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232 224h56v56a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-56h56a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-56v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56h-56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8zM576 48a48.14 48.14 0 0 0-48-48H112a48.14 48.14 0 0 0-48 48v336h512zm-64 272H128V64h384zm112 96H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33-17.47-32.77-32H16a16 16 0 0 0-16 16v16a64.19 64.19 0 0 0 64 64h512a64.19 64.19 0 0 0 64-64v-16a16 16 0 0 0-16-16z"></path></svg>` ,
        "dev_title" : "Health Care" , 
        "dev_para" : "In response to the global health crisis, Noorisys has developed innovative solutions to combat COVID-19. Our antigen test verification platform has revolutionized safety protocols, serving millions in the UK."
    } ,
    {
        "id" : "logistics-card" , 
        "svg" : `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>` ,
        "dev_title" : "Logistics" ,
        "dev_para" : "Our software solutions empower businesses to manage their logistics and supply chains efficiently, ensuring real-time reporting, seamless delivery management and customer satisfaction at every step."
    } ,
    {
        "id" : "ecommerce-card" , 
        "svg" : `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>` ,
        "dev_title" : "eCommerce" ,
        "dev_para" : "In today's competitive online marketplace, we help businesses stand out with captivating web design and user-friendly e-commerce platforms that convert visitors into loyal customers and upscale your revenue."
    },
    {
        "id" : "fintech-card" , 
        "svg" : `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>` ,
        "dev_title" : "Fintech" ,
        "dev_para" : "Seeking secure payment transactions or seamless integration for your business? We develop secure and reliable fintech solutions, including payment processing platforms and custom software for financial institutions."
    },
    {
        "id" : "tourism-card" , 
        "svg" : `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>` ,
        "dev_title" : "Tourism" ,
        "dev_para" : "We create innovative travel technology solutions that enhance customer experiences. From hotel booking systems to online travel agencies, we elevate customer satisfaction and operational efficiency."
    },
    {
        "id" : "support-card" , 
        "svg" : `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` ,
        "dev_title" : "Support Services" ,
        "dev_para" : "Our expertise extends beyond software development. We offer customer support services across various sectors like healthcare, aviation, tourism, banking. Transform your customer experience with our reliable team."
    }
]

let industries_container = document.getElementById("industries-container")


industries.map(({id , svg , dev_title , dev_para})=>{
    let aside = document.createElement("aside")
    aside.setAttribute("id" , id)
    aside.setAttribute("class" , "card")
    aside.innerHTML= `<span>${svg}</span><br>
                <br>
                <h2>${dev_title}</h2> <br>
                <p>${dev_para}</p>`
    industries_container.append(aside)
})