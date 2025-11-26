// --- REMOVE SPLASH (completely deleted) ---
// No splash logic needed anymore.

// --- Reveal on scroll ---
function revealOnScroll() {
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight - 80) {
            el.classList.add('active');
        }
    });
}

// Run when page loads
window.addEventListener('load', () => {
    revealOnScroll();
});

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// --- Smooth anchor scroll (your last line was cut off, fixed below) ---
document.addEventListener('click', e => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = e.target.getAttribute('href').substring(1);
        const target = document.getElementById(id);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
});
