// Toggle the mobile menu
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav ul');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Close the menu when a nav link is clicked (optional)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// EmailJS Integration for Contact Form
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Initialize EmailJS with your public key
    emailjs.init('YOUR_PUBLIC_KEY');
    
    // Send form data using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => {
        console.log('SUCCESS!');
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  });
}
