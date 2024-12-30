document.addEventListener('DOMContentLoaded', function () {
  // Theme Switcher
  const themeSwitcher = document.getElementById('theme-switcher');

  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeSwitcher.checked = true;
  } else {
    document.body.classList.remove('dark');
    themeSwitcher.checked = false;
  }

  // Handle toggle switch
  themeSwitcher.addEventListener('change', function () {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
  });

  // Highlight the current page in the navbar
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

  navLinks.forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active'); // Add 'active' class to the current link
    } else {
      link.classList.remove('active'); // Ensure other links don't have 'active' class
    }
  });

  // Smooth Scroll for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for sticky navbar height
          behavior: 'smooth',
        });
      }
    });
  });

  // Add scroll animations for sections
  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
      } else {
        entry.target.classList.remove('animate-visible');
      }
    });
  }, observerOptions);

  const sectionsToAnimate = document.querySelectorAll('.animate');
  sectionsToAnimate.forEach((section) => {
    observer.observe(section);
  });

  // Page Transition Animation
  const overlay = document.querySelector('.page-transition-overlay');
  if (overlay) {
    document.body.classList.remove('transitioning');

    window.addEventListener('beforeunload', () => {
      overlay.classList.add('active');
      document.body.classList.add('transitioning');
    });
  }
});
