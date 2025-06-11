// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

  // icons form visibility
const password = document.getElementById('password');
const lock = document.getElementById('img');


lock.addEventListener("click", event => {

    if(password.type == 'password') {
        password.type = 'text';
        lock.src = 'eye-slash-solid.svg';
    }
    else {
        lock.src = 'eye-solid.svg';
        password.type = 'password';   
    }
});