document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const scrollTopBtn = document.querySelector('.scroll-top');

    // Mobile Menu Toggle
    function setMenu(open) {
        navMenu.classList.toggle('active', open);
        mobileMenuBtn.classList.toggle('open', open);
        mobileMenuBtn.setAttribute('aria-expanded', String(open));
        mobileMenuBtn.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    }

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            setMenu(!navMenu.classList.contains('active'));
        });

        // Close menu when clicking nav links or outside the header
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setMenu(false));
        });
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && !header.contains(e.target)) {
                setMenu(false);
            }
        });
    }

    // Header shadow + scroll-top button on scroll
    function onScroll() {
        const y = window.scrollY;
        header.classList.toggle('scrolled', y > 20);
        if (scrollTopBtn) {
            scrollTopBtn.classList.toggle('visible', y > 600);
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scroll for anchor links (offset by header height)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
            window.scrollTo({ top: top, behavior: 'smooth' });
        });
    });

    // Highlight the nav item for the section in view
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-menu ul a'));
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = '#' + entry.target.id;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === id);
            });
        });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(section => sectionObserver.observe(section));

    // Reveal elements on scroll
    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.business-card, .timeline-item, .company-facts, .news-item').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
});
