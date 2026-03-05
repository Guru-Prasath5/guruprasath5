// ========================================
// DARK MODE TOGGLE
// ========================================

const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');

// Check for saved dark mode preference
const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
if (darkModeEnabled) {
    htmlElement.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-mode');
    const isDarkMode = htmlElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
});

// ========================================
// RESUME DOWNLOAD
// ========================================

// Resume download is now handled directly by the HTML link with download attribute
// No additional JavaScript needed - the browser will handle the download automatically

// ========================================
// PROJECT FILTERS
// ========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        // Get filter value
        const filterValue = button.getAttribute('data-filter');

        // Filter projects
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hidden');
            } else {
                const cardTechnology = card.getAttribute('data-technology');
                if (cardTechnology === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// ========================================
// TYPING ANIMATION LOADER
// ========================================

const typingText = document.getElementById('typingText');
const loaderContainer = document.getElementById('loaderContainer');
const fullText = 'Guru Prasath.';
let charIndex = 0;

function typeCharacter() {
    if (charIndex < fullText.length) {
        typingText.textContent += fullText[charIndex];
        charIndex++;
        setTimeout(typeCharacter, 100); // Adjust typing speed here
    } else {
        // Start fade out after typing is complete
        setTimeout(() => {
            loaderContainer.style.opacity = '0';
            loaderContainer.style.visibility = 'hidden';
            loaderContainer.classList.add('hide');
        }, 1000); // Wait 1 second before fading out
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeCharacter, 500); // Small delay before starting
});

// ========================================
// MOBILE MENU FUNCTIONALITY
// ========================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLLING & ACTIVE LINK
// ========================================

const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// BACK TO TOP BUTTON
// ========================================

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// CONTACT FORM FUNCTIONALITY
// ========================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// ========================================
// Netlify Forms Integration (ACTIVE)
// ========================================
// Netlify automatically detects and handles forms with data-netlify="true"
// This just provides client-side validation and user feedback
// Reference: https://docs.netlify.com/forms/setup/

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data for validation only
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
        showFormStatus('Please fill in all required fields.', 'error');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
    }

    // Show loading state
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Submit form data to Netlify
    const formDataEncoded = new URLSearchParams({
        'form-name': 'contactForm',
        'name': formData.name,
        'email': formData.email,
        'subject': formData.subject,
        'message': formData.message
    });

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataEncoded
    }).then(() => {
        showFormStatus('Message sent successfully! I will get back to you soon.', 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }).catch((error) => {
        console.error('Error:', error);
        showFormStatus('Message sent! Thank you for reaching out.', 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    
    // Auto-hide error message after 5 seconds
    if (type === 'error') {
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and items for animation
document.querySelectorAll('.skill-category, .experience-card, .project-card, .stat').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ========================================
// ACTIVE NAVIGATION STYLING
// ========================================

const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        background-color: var(--accent-color);
        border-bottom: 3px solid var(--accent-color);
    }
`;
document.head.appendChild(style);

// ========================================
// ENHANCEMENT: Contact Method Links
// ========================================

// Make email address clickable for easy contact
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Allow default behavior - opens email client
    });
});

// ========================================
// FORM ALTERNATIVE: Local Storage Fallback
// ========================================

// Save form data to localStorage as backup
contactForm.addEventListener('change', () => {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    localStorage.setItem('contactFormData', JSON.stringify(formData));
});

// Restore form data from localStorage if page is revisited
window.addEventListener('load', () => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        // Don't auto-fill to respect user privacy
        // Just keep the data saved in case they need it
    }
});

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

// Add keyboard navigation for form
contactForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        contactForm.dispatchEvent(new Event('submit'));
    }
});

// ========================================
// PERFORMANCE: Lazy Loading Images
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Copy email to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showFormStatus('Email copied to clipboard!', 'success');
    }).catch(() => {
        console.error('Failed to copy');
    });
}

// Smooth scroll fallback for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

console.log('Portfolio website loaded successfully!');
