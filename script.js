document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;
    const header = document.getElementById("main-header");
    const navbar = document.getElementById("main-nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            // Scrolling Down → Hide Header & Navbar
            header.classList.add("hide");
            navbar.classList.add("hide");
        } else {
            // Scrolling Up → Show Header & Navbar
            header.classList.remove("hide");
            navbar.classList.remove("hide");
        }
        lastScrollY = window.scrollY; // Update scroll position
    });
});


    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
        });

        // Load Dark Mode State from Local Storage
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }
    }

    // Header Background Change on Scroll
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Scroll Animation for Sections
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
});
