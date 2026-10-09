
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Buka dan tutup menu HP
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const menuTerbuka = navMenu.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", menuTerbuka);
});

// Tutup menu setelah link diklik
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Tahun otomatis
document.getElementById("year").textContent =
    new Date().getFullYear();
