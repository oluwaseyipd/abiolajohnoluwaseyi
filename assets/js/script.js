// -------------------------------------
//          Theme Switch
// ------------------------------------

const themeToggle = document.getElementById("theme-toggle");
const themeToggleIcons = document.querySelectorAll(".theme-toggle img");
const menuToggle = document.querySelector(".menu-toggles img"); // Select the single menu toggle
const quoteIcons = document.querySelectorAll(".quote img");
const body = document.body;

// Function to toggle dark mode
function toggleTheme() {
  body.classList.toggle("dark-mode");
  
  // Update image sources based on the theme
  updateIcons();

  // Save the user's preference
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
}

// Function to update icon images based on theme
function updateIcons() {
  const isDarkMode = body.classList.contains("dark-mode");

  quoteIcons.forEach(img => {
    img.src = isDarkMode 
      ? "assets/images/icons/quote-d.png"
      : "assets/images/icons/quote-w.png";
  });

  themeToggleIcons.forEach(img => {
    img.src = isDarkMode 
      ? "assets/images/icons/sun.png"
      : "assets/images/icons/moon.png";
  });

  if (menuToggle.classList.contains("close")) {
    menuToggle.src = isDarkMode ? "assets/images/icons/close-w.png" : "assets/images/icons/close-d.png";
  } else {
    menuToggle.src = isDarkMode ? "assets/images/icons/menu-w.png" : "assets/images/icons/menu-d.png";
  }
}

// Apply the saved theme on page load
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
  updateIcons(); // Ensure images update on page load
}

// Add event listener to toggle button
themeToggle.addEventListener("click", toggleTheme);

// Apply theme when the page loads
applySavedTheme();


// ---------------------------
//              NAVBAR        
// ---------------------------

const navbarLinks = document.querySelector(".navbar-links");
const links = document.querySelectorAll(".navbar-links .navbar-items a");

// Toggle Menu on Click
menuToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    menuToggle.classList.toggle("close");

    updateIcons(); // Ensure menu icon updates correctly after toggling
});

// Close the menu after clicking a link
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        navbarLinks.classList.remove("active");
        menuToggle.classList.remove("close"); // Ensure the menu icon resets

        updateIcons(); // Ensure correct icon is set after closing menu
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
