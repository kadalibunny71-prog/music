// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Fill the registration form's plan when a pricing button is selected.
const planSelect = document.getElementById("planSelect");
document.querySelectorAll("[data-plan]").forEach((link) => {
  link.addEventListener("click", () => {
    planSelect.value = link.dataset.plan;
  });
});

// Demo registration validation and confirmation.
const registrationForm = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    registrationForm.reportValidity();
    return;
  }

  const formData = new FormData(registrationForm);
  const firstName = formData.get("name").trim().split(/\s+/)[0];

  formMessage.classList.remove("error");
  formMessage.textContent = `Thanks, ${firstName}! Your demo registration is complete. The gym team would contact you after a backend is connected.`;
  registrationForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
