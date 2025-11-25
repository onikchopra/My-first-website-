// Typing Effect
const typingElement = document.getElementById('typing');
const typingTexts = ['Full Stack Developer', 'Freelancer', 'Problem Solver', 'AI Enthusiast'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 150);
    }
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Project Detail Pages
const viewProjectButtons = document.querySelectorAll('.view-project');
const projectPages = document.getElementById('projectPages');

viewProjectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.getAttribute('data-project');
        
        // Hide all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Hide footer
        document.querySelector('footer').style.display = 'none';
        
        // Show the selected project page
        const projectPage = document.getElementById(`${projectId}-page`);
        projectPage.style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Back to Projects
const backButtons = document.querySelectorAll('.back-button');
backButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Hide all project pages
        document.querySelectorAll('.project-detail').forEach(page => {
            page.style.display = 'none';
        });
        
        // Show all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'block';
        });
        
        // Show footer
        document.querySelector('footer').style.display = 'block';
        
        // Scroll to projects section
        document.getElementById('projects').scrollIntoView();
    });
});

// Contact Modal
const contactModal = document.getElementById('contactModal');
const contactButtons = document.querySelectorAll('.contact-btn');
const closeContactModal = document.getElementById('closeContactModal');

contactButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.style.display = 'flex';
    });
});

closeContactModal.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// AI Assistant Modal
const aiButton = document.getElementById('aiButton');
const aiModal = document.getElementById('aiModal');
const closeModal = document.getElementById('closeModal');

aiButton.addEventListener('click', () => {
    aiModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    aiModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === aiModal) {
        aiModal.style.display = 'none';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const quickContactForm = document.getElementById('quickContactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    // For now, we'll just show an alert
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

quickContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    quickContactForm.reset();
    contactModal.style.display = 'none';
});

// AI Query Submission
const sendQuery = document.getElementById('sendQuery');
sendQuery.addEventListener('click', () => {
    const query = document.getElementById('aiQuery').value;
    if (query.trim() !== '') {
        alert('Thank you for your question! Onik will respond to you shortly.');
        document.getElementById('aiQuery').value = '';
        aiModal.style.display = 'none';
    }
});

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', type);
