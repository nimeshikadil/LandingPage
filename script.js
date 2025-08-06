
// Smooth scrolling for navigation links
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

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Feature card hover effects with enhanced animation
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 60px rgba(173, 217, 41, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
    });
});

// CTA button interactions
function handleCTA(type) {
    const messages = {
        free: "🚀 Starting your free trial! You'll be redirected to our signup page.",
        team: "📞 Connecting you with our expert team! A consultation form will open shortly.",
        demo: "🎬 Booking your personalized demo! Our calendar will open for you to schedule."
    };
    
    // Create a modern notification
    showNotification(messages[type], 'success');
    
    // Simulate action with loading effect
    setTimeout(() => {
        console.log(`${type} action initiated`);
    }, 1000);
}

// Modern notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #2e373f, #add929);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(173, 217, 41, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: 350px;
        border: 1px solid rgba(173, 217, 41, 0.3);
        backdrop-filter: blur(10px);
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 24px;">✨</div>
            <div>${message}</div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 4000);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

// Header background change on scroll with enhanced effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrolled = window.scrollY > 100;
    
    if (scrolled) {
        header.style.background = 'linear-gradient(135deg, rgba(46, 55, 63, 0.98) 0%, rgba(173, 217, 41, 0.2) 100%)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 2px 30px rgba(173, 217, 41, 0.3)';
    } else {
        header.style.background = 'linear-gradient(135deg, rgba(46, 55, 63, 0.95) 0%, rgba(173, 217, 41, 0.1) 100%)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 2px 20px rgba(173, 217, 41, 0.2)';
    }
});

// Create animated particles background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 3 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation delay and duration
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    
    container.appendChild(particle);
    
    // Random movement animation
    const moveX = (Math.random() - 0.5) * 200;
    const moveY = (Math.random() - 0.5) * 200;
    
    particle.style.setProperty('--moveX', moveX + 'px');
    particle.style.setProperty('--moveY', moveY + 'px');
}

// Enhanced typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Parallax scrolling effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    document.querySelectorAll('.hero').forEach(hero => {
        hero.style.transform = `translate3d(0, ${rate}px, 0)`;
    });
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    .nav-links.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: linear-gradient(135deg, rgba(46, 55, 63, 0.98) 0%, rgba(173, 217, 41, 0.2) 100%);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 2rem;
        box-shadow: 0 10px 40px rgba(173, 217, 41, 0.2);
        border-radius: 0 0 20px 20px;
        border: 1px solid rgba(173, 217, 41, 0.3);
        border-top: none;
    }
    
    .mobile-menu.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
        background: linear-gradient(45deg, #add929, #ffffff);
    }
    
    .mobile-menu.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
        background: linear-gradient(45deg, #add929, #ffffff);
    }
    
    .particle {
        animation: particle-float 6s infinite ease-in-out,
                   particle-move 8s infinite linear alternate;
    }
    
    @keyframes particle-move {
        0% {
            transform: translateX(0) translateY(0);
        }
        25% {
            transform: translateX(var(--moveX, 50px)) translateY(var(--moveY, -30px));
        }
        50% {
            transform: translateX(calc(var(--moveX, 50px) * -0.5)) translateY(var(--moveY, 30px));
        }
        75% {
            transform: translateX(var(--moveX, -30px)) translateY(calc(var(--moveY, -50px) * 0.8));
        }
        100% {
            transform: translateX(0) translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Enhanced typing effect for hero title
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }
    
    // Add stagger animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's';
    });
    
    // Add floating animation to benefits
    const benefits = document.querySelectorAll('.benefit');
    benefits.forEach((benefit, index) => {
        benefit.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
    });
});

// Add interactive cursor effect
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(173, 217, 41, 0.8), transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
});

// Add click ripple effect to all buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add final ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
