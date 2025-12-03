// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.navbar-menu .menu-bar');

hamburger.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    
    // Optional: Change hamburger icon to X when open
    const icon = hamburger.querySelector('i');
    if (menuBar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.navbar-menu .menu-bar a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBar.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});