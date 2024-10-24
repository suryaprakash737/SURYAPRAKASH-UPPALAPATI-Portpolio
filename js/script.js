document.addEventListener('DOMContentLoaded', function() {
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
    themeSwitcher.addEventListener('change', function() {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', this.checked ? 'dark' : 'light');
    });
  
    // Highlight the current page in the navbar
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
  
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active'); // Add 'active' class to the current link
      } else {
        link.classList.remove('active'); // Ensure other links don't have 'active' class
      }
    });
  });
  