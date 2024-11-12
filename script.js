// Add a confirmation dialog before navigating to social media links
document.querySelectorAll('.footer-section.social a').forEach(link => {
    link.addEventListener('click', (event) => {
        const confirmMessage = "You are leaving our site. Continue?";
        if (!confirm(confirmMessage)) {
            event.preventDefault();
        }
    });
});
// ---------------------------------------for login page-----------------------------------------------------
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Both fields are required!");
        return false;
    }

    // You can add more complex validation logic here
    alert("Form submitted successfully!");
    return true;  // Submit the form if validation passes
}


