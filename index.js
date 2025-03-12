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
