document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');

    if (toggle && links) {
        toggle.addEventListener('click', function() {
            if (links.style.display === 'flex') {
                links.style.display = 'none';
            } else {
                links.style.display = 'flex';
            }
        });
    }

    // Close menu on link click
    var navAnchors = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < navAnchors.length; i++) {
        navAnchors[i].addEventListener('click', function() {
            if (window.innerWidth <= 640) {
                links.style.display = 'none';
            }
        });
    }

    // Smooth scroll
    var allAnchors = document.querySelectorAll('a[href^="#"]');
    for (var j = 0; j < allAnchors.length; j++) {
        allAnchors[j].addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                var top = target.getBoundingClientRect().top + window.pageYOffset - 64;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    }

    // Init lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
