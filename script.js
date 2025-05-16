// Button click changes text and color
const volunteerBtn = document.getElementById("volunteerBtn");

volunteerBtn.addEventListener("click", () => {
  volunteerBtn.textContent = "Thank you for volunteering!";
  volunteerBtn.classList.add("active");
});

// Secret double-click action
volunteerBtn.addEventListener("dblclick", () => {
  alert("🎉 Secret thanks for double-clicking! 🎉");
});

// Hover effect (already via CSS) - bonus: change color via JS on hover
volunteerBtn.addEventListener("mouseover", () => {
  volunteerBtn.style.backgroundColor = "#66b2ff";
});
volunteerBtn.addEventListener("mouseout", () => {
  volunteerBtn.style.backgroundColor = "";
});

// Keypress detection anywhere on page
window.addEventListener("keypress", (e) => {
  if (e.key.toLowerCase() === "v") {
    alert("You pressed 'V' - Ready to volunteer?");
  }
});

// Image slideshow logic
const images = document.querySelectorAll(".slideshow img");
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

showImage(currentIndex);

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 4000);

// Accordion toggle
const accordionBtns = document.querySelectorAll(".accordion-btn");
accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const panel = btn.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

// Form validation with real-time feedback
const form = document.getElementById("volunteerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMsg = document.getElementById("formMsg");

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(pw) {
  return pw.length >= 8;
}

// Real-time validation handlers
nameInput.addEventListener("input", () => {
  nameError.textContent =
    nameInput.value.trim() === "" ? "Name is required." : "";
});

emailInput.addEventListener("input", () => {
  emailError.textContent = validateEmail(emailInput.value)
    ? ""
    : "Invalid email format.";
});

passwordInput.addEventListener("input", () => {
  passwordError.textContent = validatePassword(passwordInput.value)
    ? ""
    : "Minimum 8 characters.";
});

// Form submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  }
  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = "Minimum 8 characters.";
    valid = false;
  }

  if (valid) {
    formMsg.style.color = "green";
    formMsg.textContent = "Thank you for signing up to volunteer!";
    form.reset();
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
  } else {
    formMsg.style.color = "#cc0000";
    formMsg.textContent = "Please fix the errors above.";
  }
});
