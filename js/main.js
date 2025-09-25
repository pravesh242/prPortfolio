// Main JavaScript for Portfolio

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initSmoothScrolling();
    initContactForm();
    initBackToTop();
    initAnimations();
    initTheme();
});

// Navigation
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(42, 42, 42, 0.98)';
            } else {
                header.style.backgroundColor = 'rgba(42, 42, 42, 0.95)';
            }
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.getElementById('header')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const formData = new FormData(this);
            
            // Show loading state
            submitButton.classList.add('loading');
            submitButton.disabled = true;
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await simulateFormSubmission(formData);
                
                // Show success message
                showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                this.reset();
                
            } catch (error) {
                // Show error message
                showToast('Failed to send message. Please try again.', 'error');
                console.error('Form submission error:', error);
                
            } finally {
                // Remove loading state
                submitButton.classList.remove('loading');
                submitButton.disabled = false;
            }
        });
    }
}

// Simulate form submission (replace with actual API call)
function simulateFormSubmission(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Log form data for demo
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            console.log('Form Data:', data);
            
            // Simulate success (90% success rate for demo)
            if (Math.random() > 0.1) {
                resolve(data);
            } else {
                reject(new Error('Simulated network error'));
            }
        }, 1000);
    });
}

// Toast notifications
function showToast(message, type = 'info') {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(toast => toast.remove());
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-message">${message}</span>
            <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    `;
    
    // Add toast styles
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background: ${type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideOut 0.3s ease-out forwards';
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
}

// Back to Top
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Show/hide back to top button
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        });
    }
}

// Animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-category, .project-card, .testimonial-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
    
    // Typing animation for hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animateTypewriter(heroTitle);
    }
}

// Typewriter animation
function animateTypewriter(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '3px solid var(--accent-primary)';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Theme management
function initTheme() {
    // Respect user's color scheme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // User prefers light mode - could add light theme support here
        console.log('User prefers light mode');
    }
    
    // Listen for changes in color scheme preference
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        if (e.matches) {
            console.log('Switched to light mode');
        } else {
            console.log('Switched to dark mode');
        }
    });
}

// Download Resume function
function downloadResume() {
    // Create a mock resume download
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Pravesh Rana - Technical Salesforce Consultant Resume\n\nThis is a mock resume file. Replace with actual resume PDF.';
    link.download = 'Pravesh_Rana_Resume.txt';
    link.click();
    
    // Show notification
    showToast('Resume download started!', 'success');
}

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimized scroll handler
const optimizedScrollHandler = throttle(function() {
    // Add scroll-based functionality here if needed
    const scrollY = window.scrollY;
    
    // Example: Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && scrollY < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
}, 16); // ~60fps

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .toast-close {
        background: none;
        border: none;
        color: currentColor;
        cursor: pointer;
        padding: 0;
        opacity: 0.7;
        transition: opacity 0.2s ease;
    }
    
    .toast-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Enable scroll handler
window.addEventListener('scroll', optimizedScrollHandler);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content with Tab
    if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
        const main = document.querySelector('main');
        if (main) {
            main.focus();
            e.preventDefault();
        }
    }
    
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu?.classList.contains('active')) {
            navToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    }
});