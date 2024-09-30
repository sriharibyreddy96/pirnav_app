let items = document.querySelectorAll('.text-item');
let index = 0;

setInterval(() => {
    items[index].classList.remove('active');
    index = (index + 1) % items.length;
    items[index].classList.add('active');
}, 3000); // Change every 3 seconds
