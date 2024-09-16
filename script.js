// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    // Scroll animations
    const elements = document.querySelectorAll('.fade-in');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
    // scripts.js

    document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
  
    // Show/Hide Button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
      } else {
        backToTopButton.classList.add('hidden');
      }
    });
  
    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
    // JavaScript for toggling the menu on mobile
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('hidden');

      });

      
      