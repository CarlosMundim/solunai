// Component inclusion system for shared header and footer
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading component:', componentPath, error);
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    // Load header and footer
    await Promise.all([
        loadComponent('header-placeholder', './components/header.html'),
        loadComponent('footer-placeholder', './components/footer.html')
    ]);
    
    // Initialize navigation scripts after header is loaded
    initializeNavigation();
});

function initializeNavigation() {
    // Set up language switcher
    const currentPage = window.location.pathname;
    const langJp = document.querySelector('.lang-jp');
    const langEn = document.querySelector('.lang-en');
    
    if (langJp && langEn) {
        // Determine current page name
        const pageName = currentPage.split('/').pop() || 'index.html';
        const basePageName = pageName.replace('.html', '');
        
        // Set up language links
        if (currentPage.includes('/en/')) {
            // Currently on English page
            langJp.href = `/${basePageName === 'index' ? '' : basePageName + '.html'}`;
            langEn.href = `/en/${basePageName === 'index' ? '' : basePageName + '.html'}`;
        } else {
            // Currently on Japanese page
            langJp.href = `/${basePageName === 'index' ? '' : basePageName + '.html'}`;
            langEn.href = `/en/${basePageName === 'index' ? '' : basePageName + '.html'}`;
        }
    }
    
    // Set active navigation item
    const aboutNav = document.getElementById('about-nav');
    if (aboutNav && currentPage.includes('about')) {
        aboutNav.style.color = 'var(--color-primary-400)';
    }
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.8)';
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}