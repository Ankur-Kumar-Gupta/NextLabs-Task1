document.addEventListener("DOMContentLoaded", function () {
  var openModalButtons = document.querySelectorAll(".open-modal");

  openModalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var targetModalId = this.getAttribute("data-target");
      var modal = document.getElementById(targetModalId);

      if (modal) {
        modal.classList.add("show");
        modal.style.display = "block";
        document.body.classList.add("modal-open");
      }
    });
  });

  var pricingModal = document.getElementById("pricingModal");
  var closeButton = document.querySelector("#pricingModal .close");
  var submitButton = document.getElementById("subBtn");

  function closeModal() {
    pricingModal.classList.remove("show");
    pricingModal.style.display = "none";
    document.body.classList.remove("modal-open");
  }

  closeButton.addEventListener("click", closeModal);

  submitButton.addEventListener("click", function () {
    // Add logic to submit the form data (e.g., send to a server)
    // For now, just show a confirmation message and close the modal
    alert("Form submitted successfully!");
    closeModal();
  });
});
