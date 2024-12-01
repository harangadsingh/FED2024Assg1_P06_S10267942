const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    scrollTopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
