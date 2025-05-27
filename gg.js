document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Simple form validation
    if (name && email && feedback) {
        // Show confirmation message
        document.getElementById('confirmationMessage').classList.remove('hidden');

        // Clear the form
        document.getElementById('feedbackForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
