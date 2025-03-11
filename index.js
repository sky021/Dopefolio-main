// // ---
// const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
// const smallMenu = document.querySelector('.header__sm-menu')
// const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
// const headerHamMenuCloseBtn = document.querySelector(
//   '.header__main-ham-menu-close'
// )
// const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

// hamMenuBtn.addEventListener('click', () => {
//   if (smallMenu.classList.contains('header__sm-menu--active')) {
//     smallMenu.classList.remove('header__sm-menu--active')
//   } else {
//     smallMenu.classList.add('header__sm-menu--active')
//   }
//   if (headerHamMenuBtn.classList.contains('d-none')) {
//     headerHamMenuBtn.classList.remove('d-none')
//     headerHamMenuCloseBtn.classList.add('d-none')
//   } else {
//     headerHamMenuBtn.classList.add('d-none')
//     headerHamMenuCloseBtn.classList.remove('d-none')
//   }
// })

// for (let i = 0; i < headerSmallMenuLinks.length; i++) {
//   headerSmallMenuLinks[i].addEventListener('click', () => {
//     smallMenu.classList.remove('header__sm-menu--active')
//     headerHamMenuBtn.classList.remove('d-none')
//     headerHamMenuCloseBtn.classList.add('d-none')
//   })
// }

// // ---
// const headerLogoConatiner = document.querySelector('.header__logo-container')

// headerLogoConatiner.addEventListener('click', () => {
//   location.href = 'index.html'
// })


// Mobile Menu Toggle
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active');
  } else {
    smallMenu.classList.add('header__sm-menu--active');
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  } else {
    headerHamMenuBtn.classList.add('d-none');
    headerHamMenuCloseBtn.classList.remove('d-none');
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
}

// Logo Click to Redirect to Home
const headerLogoContainer = document.querySelector('.header__logo-container');

headerLogoContainer.addEventListener('click', () => {
  location.href = 'index.html';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lead Down Button Scroll
const leadDownBtn = document.querySelector('#lead-down');

if (leadDownBtn) {
  leadDownBtn.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  });
}