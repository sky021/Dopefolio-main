document.querySelector('.menu-icon').addEventListener('click', () => {
  document.querySelector('.nav ul').classList.toggle('active');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
      document.querySelector('.nav ul').classList.remove('active');
  });
});
