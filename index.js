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
  AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

  // Mobile Menu Toggle
  const menuIcon = document.querySelector('.menu-icon');
  const navList = document.querySelector('.nav ul');
  menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
      }
    });
  });

  // Dark Mode Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = "☀️";
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
    themeToggle.textContent = mode === 'dark' ? "☀️" : "🌙";
  });

  // Opacity Transition Effect
  const sections = document.querySelectorAll("section");
  let opacity = 0.4;
  sections.forEach((section, index) => {
    section.style.background = `rgba(255, 255, 255, ${opacity})`;
    opacity += 0.1;
  });
});
