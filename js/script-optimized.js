// Optimized JavaScript with performance improvements

// Utility functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Efficient DOM ready function
const ready = (fn) => {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

// Mobile menu functionality with optimized event handling
const initMobileMenu = () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!menuToggle || !mobileMenu) return;

    const toggleMenu = () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        
        // Update button icon
        const icon = isHidden ? 'fa-times' : 'fa-bars';
        const oldIcon = isHidden ? 'fa-bars' : 'fa-times';
        
        const iconElement = menuToggle.querySelector('svg') || menuToggle.querySelector('i');
        if (iconElement) {
            iconElement.className = iconElement.className.replace(oldIcon, icon);
        }
        
        // Update aria attributes for accessibility
        menuToggle.setAttribute('aria-expanded', !isHidden);
        mobileMenu.setAttribute('aria-hidden', isHidden);
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
            }
        }
    });
};

// Optimized Intersection Observer for scroll animations
const initScrollAnimations = () => {
    const sections = document.querySelectorAll('section.hidden-section');
    const items = document.querySelectorAll('.hidden-item');
    
    if (!sections.length && !items.length) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections and items
    [...sections, ...items].forEach(element => {
        observer.observe(element);
    });
};

// Optimized smooth scroll with performance improvements
const initSmoothScroll = () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Use requestAnimationFrame for smooth performance
                requestAnimationFrame(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
};

// Image protection with optimized event delegation
const initImageProtection = () => {
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
};

// Lazy loading for images with Intersection Observer
const initLazyLoading = () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if (!lazyImages.length) return;

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Handle picture elements
                const picture = img.closest('picture');
                if (picture) {
                    const sources = picture.querySelectorAll('source');
                    sources.forEach(source => {
                        if (source.dataset.srcset) {
                            source.srcset = source.dataset.srcset;
                            source.removeAttribute('data-srcset');
                        }
                    });
                }
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                img.classList.remove('lazy-placeholder');
                imageObserver.unobserve(img);
            }
        });
    }, { rootMargin: '100px' });

    lazyImages.forEach(img => imageObserver.observe(img));
};

// Performance monitoring
const initPerformanceMonitoring = () => {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const navTiming = performance.getEntriesByType('navigation')[0];
                if (navTiming) {
                    console.log('Performance Metrics:', {
                        'DOM Content Loaded': navTiming.domContentLoadedEventEnd - navTiming.domContentLoadedEventStart,
                        'Full Page Load': navTiming.loadEventEnd - navTiming.loadEventStart,
                        'First Paint': performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime,
                        'First Contentful Paint': performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime
                    });
                }
            }, 0);
        });
    }
};

// Initialize all functionality
const init = () => {
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    initImageProtection();
    initLazyLoading();
    
    // Add development performance monitoring
    if (process.env.NODE_ENV === 'development') {
        initPerformanceMonitoring();
    }
    
    // Add loaded class to trigger animations
    window.addEventListener('load', () => {
        document.querySelectorAll('.loading').forEach(el => {
            el.classList.add('loaded');
        });
    });
};

// Export for use in other modules
window.initializeScrollAnimations = initScrollAnimations;

// Initialize when DOM is ready
ready(init);