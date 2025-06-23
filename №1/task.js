document.addEventListener('scroll', function() {
    const reveal = document.querySelector('.reveal');
    const revealTop = reveal.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (revealTop < windowHeight && revealTop > 0) {
        reveal.classList.add('reveal_active');
    }
});