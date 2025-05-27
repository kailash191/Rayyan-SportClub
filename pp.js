document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const subject = document.getElementById('subject').value;
    const userMessage = document.getElementById('userMessage').value;

    if(fullname && emailAddress && phoneNumber && subject && userMessage) {
        document.getElementById('formFeedback').textContent = 'Thank you for reaching out to us! We will get back to you soon.';
        document.getElementById('formFeedback').style.display = 'block';

        // Optionally, send the form data to the server here

        document.getElementById('contactForm').reset();
    }
});
