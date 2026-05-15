document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Retrieve values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation check
        if(name && email && message) {
            // Mocking a successful submission
            statusMessage.style.color = "#4A3267";
            statusMessage.innerHTML = `<br>Thank you, ${name}. Your message has been sent to the Eunoia team.`;
            
            // Clear form
            contactForm.reset();
        } else {
            statusMessage.style.color = "red";
            statusMessage.textContent = "Please fill in all fields.";
        }
    });

    // Smooth Scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
