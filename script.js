document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from actually trying to send
            
            // Hide the form and show the "Submitted!" card
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Scroll to the message so the user sees it
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // Scroll Reveal Effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });
});
