document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});
