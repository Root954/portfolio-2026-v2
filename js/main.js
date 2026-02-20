/**
 * Junior MBA Portfolio v3
 */

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScrollAnimations();
    lucide.createIcons();
});

function initNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.nav-links');

    if (toggle) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => {
            links.classList.remove('active');
            toggle.classList.remove('active');
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 64;
                const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-anim], .project-row, .tl-item, .toolbox-card, .education').forEach(el => {
        observer.observe(el);
    });
}
