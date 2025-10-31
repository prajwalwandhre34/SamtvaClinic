// Hero Slider Functionality
let slideIndex = 0;
let slideTimer;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
    
    slideTimer = setTimeout(showSlides, 5000);
}

function changeSlide(n) {
    clearTimeout(slideTimer);
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slideIndex += n;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
    
    slideTimer = setTimeout(showSlides, 5000);
}

function currentSlide(n) {
    clearTimeout(slideTimer);
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slideIndex = n + 1;
    
    slides[n].classList.add('active');
    dots[n].classList.add('active');
    
    slideTimer = setTimeout(showSlides, 5000);
}

// Testimonial Carousel Functionality
let testimonialIndex = 0;

function showTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[testimonialIndex].classList.add('active');
    dots[testimonialIndex].classList.add('active');
}

function changeTestimonial(n) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    testimonialIndex += n;
    
    if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
    }
    if (testimonialIndex < 0) {
        testimonialIndex = testimonials.length - 1;
    }
    
    showTestimonials();
}

function currentTestimonial(n) {
    testimonialIndex = n;
    showTestimonials();
}

// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    
    if (navMenu.style.display === 'flex') {
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'white';
        navMenu.style.flexDirection = 'column';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
    showTestimonials();
});

// Console log for interactions (for demonstration)
console.log('Parijatak Ayurveda website loaded successfully!');
