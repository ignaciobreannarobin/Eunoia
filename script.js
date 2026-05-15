document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const statusBox = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        submitBtn.innerText = "Processing...";
        submitBtn.style.opacity = "0.7";

        // Simulated validation/network request
        setTimeout(() => {
            const email = document.getElementById('email').value;

            if (email.includes('@')) {
                statusBox.innerHTML = "THANK YOU — YOUR MESSAGE HAS BEEN SUBMITTED";
                statusBox.className = "status-box success";
                contactForm.reset();
            } else {
                statusBox.innerHTML = "ERROR — PLEASE PROVIDE A VALID EMAIL";
                statusBox.className = "status-box error";
            }
            
            submitBtn.innerText = "Send Message";
            submitBtn.style.opacity = "1";
        }, 1500);
    });

    // Smooth Scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
