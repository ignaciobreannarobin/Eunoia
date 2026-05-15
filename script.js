document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Visual feedback during "processing"
        submitBtn.textContent = "Sending...";
        submitBtn.style.opacity = "0.7";

        // Simulate an API call
        setTimeout(() => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            // Simple Success logic (simulated)
            if (name && email.includes('@')) {
                statusMessage.innerHTML = "✓ Submitted! Thank you for reaching out.";
                statusMessage.className = "status-box success";
                contactForm.reset();
            } else {
                statusMessage.innerHTML = "✕ Error: Please check your details and try again.";
                statusMessage.className = "status-box error";
            }

            submitBtn.textContent = "Send Message";
            submitBtn.style.opacity = "1";
        }, 1000);
    });
});
