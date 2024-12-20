function submitForm(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation
    if (name && email && message) {
        document.getElementById("form-response").textContent = "Thank you for your message!";
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-response").textContent = "Please fill out all fields.";
    }
}
