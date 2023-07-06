document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM is ready');

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }
});


// ==========
// NAVIGATION
// ==========

// Select all section controlling links and sections
const navLinks = document.querySelectorAll('nav .section-link');
const sections = document.querySelectorAll('main > .container > div');

// Function to handle click events on section links
function handleClick(event) {
    event.preventDefault();

    // Get the target section from the clicked link's data-target attribute
    const targetSection = document.getElementById(event.target.dataset.target);

    // Hide all sections
    for (const section of sections) {
        section.classList.add('hidden');
    }

    // Show the target section
    targetSection.classList.remove('hidden');

    // Remove active class from all links
    for (const link of navLinks) {
        link.classList.remove('active');
    }

    // Add active class to the clicked link
    event.target.classList.add('active');
}

// Add the handleClick function as a click event listener for each section controlling link
navLinks.forEach(link => link.addEventListener('click', handleClick));


// ======================
// DARK/LIGHT MODE SWITCH
// ======================

// Select theme switcher button
const themeSwitcher = document.querySelector("#theme-switcher");

// Toggle the class to change mode
themeSwitcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Save the current theme in localStorage
    localStorage.setItem('theme', document.body.className);
});
