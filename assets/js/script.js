// ---------------------------
//              NAVBAR        
// ---------------------------

const menuToggle = document.querySelector('.menu-toggles img');
const navbarLinks = document.querySelector('.navbar-links');
const links = document.querySelectorAll('.navbar-links .navbar-items a');

// Toggle Menu on Click
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');

    const isActive = navbarLinks.classList.contains('active');

    menuToggle.src = isActive
        ? 'assets/images/icons/close-w.png'
        : 'assets/images/icons/menu-w.png';
    menuToggle.alt = isActive ? 'Close menu' : 'Open menu';
});

// Close the menu after clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        navbarLinks.classList.remove('active');
        menuToggle.src = 'assets/images/icons/menu-w.png';
        menuToggle.alt = 'Open menu';
    });
});

// -------------------------------------
//          Testimonial
// ------------------------------------

const swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: 1, // Default: 1 slide per view
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 3 },
    },
});
