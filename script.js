// Mobile navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

// Contact form validation and confirmation

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  formMessage.textContent =
    "Thank you, " + name + "! Your message was received in this demo.";

  contactForm.reset();
});

// Welcome message

console.log("Welcome to Kaviya R's Portfolio!");
