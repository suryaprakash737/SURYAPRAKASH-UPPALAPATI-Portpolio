// Toggle Dark Mode and Active Link Highlighting
document.addEventListener('DOMContentLoaded', function() {
  const themeSwitcher = document.getElementById('theme-switcher');

  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      themeSwitcher.checked = true;
  }

  // Handle toggle switch
  themeSwitcher.addEventListener('change', function() {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', this.checked ? 'dark' : 'light');
  });

  // Handle active link highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split("/").pop(); // Get the current page name

  navLinks.forEach(link => {
      // Highlight the active link based on the current page
      if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
      }

      link.addEventListener('click', function() {
          // Remove 'active' class from all links
          navLinks.forEach(nav => nav.classList.remove('active'));
          // Add 'active' class to the clicked link
          this.classList.add('active');
      });
  });
});
