// Load and initialize EmailJS
(function () {
  emailjs.init("G8RSxLwGzAA7YYVna"); // Replace with your EmailJS public key
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_7folirl", "template_8dclmhb", this)
    .then(function () {
      document.getElementById("form-status").style.display = "block"; // Show success message
      document.getElementById("contact-form").reset(); // Reset form
    }, function (error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
});
