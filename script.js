const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    faders.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add('show');
        }
    });
});
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});