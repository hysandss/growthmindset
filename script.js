// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Hamburger Menu - Auto-Tutup Saat Menu Diklik
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const menuItems = navLinks.querySelectorAll('a');

// Toggle menu dengan klik hamburger
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu saat salah satu item diklik
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Tutup menu tanpa animasi
    });
});

// Portfolio Scroll - Tanpa Smooth Behavior
const portfolioContainer = document.querySelector('.portfolio-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const cardWidth = document.querySelector('.portfolio-card').offsetWidth + 15;

leftBtn.addEventListener('click', () => {
    portfolioContainer.scrollLeft -= cardWidth; // Scroll langsung tanpa smooth
});

rightBtn.addEventListener('click', () => {
    portfolioContainer.scrollLeft += cardWidth; // Scroll langsung tanpa smooth
});

// Disable buttons at scroll limits
portfolioContainer.addEventListener('scroll', () => {
    const scrollLeft = portfolioContainer.scrollLeft;
    const maxScroll = portfolioContainer.scrollWidth - portfolioContainer.clientWidth;
    leftBtn.disabled = scrollLeft <= 0;
    rightBtn.disabled = scrollLeft >= maxScroll - 1;
});