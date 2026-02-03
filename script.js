const form = document.getElementById("registrationForm");
const confirmModal = document.getElementById("confirmModal");
const successModal = document.getElementById("successModal");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const okBtn = document.getElementById("okBtn");

confirmModal.style.display = "none";
successModal.style.display = "none";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  confirmModal.style.display = "flex";
});

yesBtn.addEventListener("click", function () {
  confirmModal.style.display = "none";
  successModal.style.display = "flex";
  form.reset();
});

noBtn.addEventListener("click", function () {
  confirmModal.style.display = "none";
  form.reset();
});

okBtn.addEventListener("click", function () {
  successModal.style.display = "none";
});
