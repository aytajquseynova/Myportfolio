const navbar = document.querySelector(".navbar");
const barBtn = document.querySelector("#navigation-btn");
const hamburger = document.querySelector(".hamburger");

// Mobile menu
barBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    hamburger.classList.toggle("active");
})

// Close menu

const navbarLink = document.querySelectorAll(".navbar ul li a");

navbarLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navbar.classList.remove("active");
    hamburger.classList.remove("active");
}