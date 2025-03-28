/**
 * Main JavaScript File
 * Author: Alex Ruby
 * Description: Main JavaScript functionality for Ruby on Rails developer portfolio
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeProjectFilters();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeThemeToggle();
    initializeCaseStudyModals();
});

/**
 * Navigation functionality
 * - Handles mobile menu toggling
 * - Handles header scroll effect
 * - Handles active navigation links
 */
function initializeNavigation() {
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open
    });
    
    // Close mobile menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Active link highlighting based on scroll position
    window.addEventListener('scroll', highlightNavOnScroll);
    highlightNavOnScroll(); // Call once on page load
}

/**
 * Highlights the current section in the navigation
 * by checking the scroll position against section positions
 */
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100; // Offset for better UX
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Project filtering functionality
 * for the projects section
 */
function initializeProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add click event to filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.transform = 'translateY(0)';
                        card.style.opacity = '1';
                    }, 100);
                } else {
                    card.style.transform = 'translateY(20px)';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/**
 * Contact form handling
 * - Form validation
 * - Submission feedback (static in this case)
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Very simple validation
            if (name === '' || email === '' || subject === '' || message === '') {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }
            
            // Email validation using a simple regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show success message (in a real app, we would send the data to a server)
            showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            
            // Clear the form
            contactForm.reset();
        });
    }
}

/**
 * Shows a message above the contact form
 * @param {string} message - The message to display
 * @param {string} type - The type of message (success or error)
 */
function showFormMessage(message, type) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    
    // Insert the message above the form
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(messageElement, form);
    
    // Remove the message after 5 seconds
    setTimeout(() => {
        messageElement.classList.add('fade-out');
        setTimeout(() => {
            messageElement.remove();
        }, 500);
    }, 5000);
}

/**
 * Initializes smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip if href is just "#"
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return; // Skip if target doesn't exist
            
            // Calculate scroll position (with header offset)
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // Scroll to position
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Initializes theme toggle functionality
 * - Adds a theme toggle button to the header
 * - Handles switching between light and dark themes
 * - Saves user preference to localStorage
 */
function initializeThemeToggle() {
    // Create theme toggle button
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.className = 'theme-toggle-btn';
    themeToggleBtn.setAttribute('aria-label', 'Toggle Dark/Light Mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    
    // Add it to the header next to the nav
    const mainNav = document.querySelector('.main-nav');
    mainNav.insertBefore(themeToggleBtn, mainNav.firstChild);
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    
    // If user has previously selected dark theme or prefers dark color scheme
    if (savedTheme === 'dark' || (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', function() {
        // Remove any existing theme classes
        document.body.classList.remove('dark-theme', 'light-theme');
        
        // Toggle between light and dark
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

/**
 * Initializes case study modals
 * - Handles opening and closing of case study modals
 * - Implements keyboard accessibility for modals
 */
function initializeCaseStudyModals() {
    const modalButtons = document.querySelectorAll('.btn-case-study');
    const modals = document.querySelectorAll('.case-study-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
    
    if (!modalButtons.length || !modals.length) return;
    
    // Open modal when case study button is clicked
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            // Prevent scrolling of background content
            document.body.classList.add('no-scroll');
            
            // Display and animate the modal
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
        });
    });
    
    // Close modal when close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', closeActiveModal);
    });
    
    // Close modal when clicking outside the content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeActiveModal();
            }
        });
    });
    
    // Close modal when pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeActiveModal();
        }
    });
    
    // Helper function to close the active modal
    function closeActiveModal() {
        const activeModal = document.querySelector('.case-study-modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            
            // Wait for the transition to finish before hiding
            setTimeout(() => {
                activeModal.style.display = 'none';
                document.body.classList.remove('no-scroll');
            }, 300);
        }
    }
}
