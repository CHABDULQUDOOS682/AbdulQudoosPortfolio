/**
 * Animations JavaScript File
 * Author: Alex Ruby
 * Description: Animations and visual effects for Ruby on Rails developer portfolio
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initializeLoadAnimations();
    initializeScrollAnimations();
    initializeHoverEffects();
    initializeTypingEffect();
});

/**
 * Handles animations that should trigger on page load
 */
function initializeLoadAnimations() {
    // Get all elements with the 'animate-on-load' class
    const animatedElements = document.querySelectorAll('.animate-on-load');
    
    // Add the 'loaded' class after a short delay
    setTimeout(() => {
        animatedElements.forEach(element => {
            element.classList.add('loaded');
        });
    }, 100);
    
    // Animate the progress bars in the skills section after a delay
    setTimeout(() => {
        animateSkillBars();
    }, 1000);
}

/**
 * Handles animations that should trigger on scroll
 */
function initializeScrollAnimations() {
    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // If this is a skill item, animate its progress bar
                if (entry.target.closest('.skills-section')) {
                    animateSkillBars();
                }
                
                // Unobserve the element once it's been animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    
    // Observe all section titles and other elements that should animate
    document.querySelectorAll('.section-title, .project-card, .skill-item, .stat, .contact-form, .contact-info').forEach(element => {
        observer.observe(element);
        
        // Add a class that will be used for CSS transitions
        element.classList.add('scroll-animate');
    });
    
    // Parallax effect for the hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection && scrollPosition < heroSection.offsetHeight) {
            // Create a subtle parallax effect
            const translateValue = scrollPosition * 0.3;
            heroSection.style.backgroundPosition = `center ${translateValue}px`;
        }
    });
}

/**
 * Animates the skill progress bars
 */
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        // Get the target width from the style attribute
        const targetWidth = bar.style.width;
        
        // First set width to 0
        bar.style.width = '0';
        
        // Then animate to the target width
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
}

/**
 * Initializes hover effects for interactive elements
 */
function initializeHoverEffects() {
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });
    
    // Skill items hover effect
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Get the skill name
            const skillName = this.getAttribute('data-skill');
            
            // Create and show a tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'skill-tooltip';
            tooltip.textContent = `${skillName}`;
            this.appendChild(tooltip);
            
            // Position the tooltip
            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(0)';
            }, 50);
        });
        
        item.addEventListener('mouseleave', function() {
            // Remove the tooltip
            const tooltip = this.querySelector('.skill-tooltip');
            if (tooltip) {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(-10px)';
                
                // Remove from DOM after transition
                setTimeout(() => {
                    tooltip.remove();
                }, 300);
            }
        });
    });
}

/**
 * Creates a typing effect for the hero heading
 */
function initializeTypingEffect() {
    // Get the element where we want to create the typing effect
    const typingElement = document.querySelector('.hero-text h2');
    
    if (!typingElement) return;
    
    // Store the original text
    const originalText = typingElement.textContent;
    
    // Set element to empty first
    typingElement.textContent = '';
    
    // Function to simulate typing
    function typeText(text, i, callback) {
        if (i < text.length) {
            typingElement.innerHTML = text.substring(0, i + 1) + '<span class="typing-cursor">|</span>';
            
            // Random typing speed for a more realistic effect
            const typingSpeed = Math.random() * 100 + 50;
            
            setTimeout(function() {
                typeText(text, i + 1, callback);
            }, typingSpeed);
        } else {
            // Remove cursor when done typing
            typingElement.innerHTML = text;
            if (callback) callback();
        }
    }
    
    // Start typing effect after a delay
    setTimeout(() => {
        typeText(originalText, 0, null);
    }, 1000);
}

/**
 * Additional visual effects and animations
 * for enhanced user experience
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add a ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);
            
            // Get position
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set position of ripple
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Image hover zoom effect
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            const placeholder = this.querySelector('.image-placeholder');
            if (placeholder) {
                placeholder.style.transform = 'scale(1.05)';
            }
        });
        
        image.addEventListener('mouseleave', function() {
            const placeholder = this.querySelector('.image-placeholder');
            if (placeholder) {
                placeholder.style.transform = 'scale(1)';
            }
        });
    });
    
    // Add animation for stats in about section
    const stats = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
            const duration = 2000; // Animation duration in milliseconds
            const increment = Math.ceil(target / (duration / 16)); // Assuming 60fps
            let current = 0;
            
            // Only animate if not already animated
            if (!stat.classList.contains('animated')) {
                stat.classList.add('animated');
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        stat.textContent = current + '+';
                    }
                }, 16);
            }
        });
    }
    
    // Create observer for stats section
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    // Observe the stats section
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});
