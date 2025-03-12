document.addEventListener("DOMContentLoaded", function() {
  // Mobile Menu Toggle
  const menuIcon = document.querySelector('.menu-icon');
  const navList = document.querySelector('.nav ul');
  
  menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
  
  // Close mobile menu when a navigation link is clicked
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
      }
    });
  });
  
  // EmailJS Integration for the contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Initialize EmailJS (replace with your actual public key)
      emailjs.init('YOUR_PUBLIC_KEY');
      
      // Send form data using EmailJS (replace service and template IDs accordingly)
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
          alert('Message sent successfully!');
          contactForm.reset();
        }, (error) => {
          alert('Failed to send message. Please try again.');
        });
    });
  }
});
