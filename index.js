// document.addEventListener("DOMContentLoaded", function() {
//   // Mobile Menu Toggle
//   const menuIcon = document.querySelector('.menu-icon');
//   const navList = document.querySelector('.nav ul');
  
//   menuIcon.addEventListener('click', () => {
//     navList.classList.toggle('active');
//   });
  
//   // Close mobile menu when a navigation link is clicked
//   document.querySelectorAll('.nav a').forEach(link => {
//     link.addEventListener('click', () => {
//       if (navList.classList.contains('active')) {
//         navList.classList.remove('active');
//       }
//     });
//   });
  
//   // EmailJS Integration for the contact form
//   const contactForm = document.getElementById('contact-form');
//   if (contactForm) {
//     contactForm.addEventListener('submit', function(event) {
//       event.preventDefault();
      
//       // Initialize EmailJS (replace with your actual public key)
//       emailjs.init('YOUR_PUBLIC_KEY');
      
//       // Send form data using EmailJS (replace service and template IDs accordingly)
//       emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
//         .then(() => {
//           alert('Message sent successfully!');
//           contactForm.reset();
//         }, (error) => {
//           alert('Failed to send message. Please try again.');
//         });
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function() {
  // Initialize AOS for scroll animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

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
  
  // Dark/Light Mode Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Change the icon based on current mode
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
  });
  
  // EmailJS Integration for Contact Form (replace YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, and YOUR_TEMPLATE_ID with actual values)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Initialize EmailJS (ensure you have included the EmailJS SDK in your project)
      emailjs.init('YOUR_PUBLIC_KEY');
      
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
          alert('Message sent successfully!');
          contactForm.reset();
        }, (error) => {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        });
    });
  }
});
