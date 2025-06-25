document.addEventListener('scroll', function () {
    const reveals = document.querySelectorAll('.reveal'); // выбираем все .reveal
    const windowHeight = window.innerHeight;

    reveals.forEach(function (reveal) {
        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight && revealTop > 0) {
            reveal.classList.add('reveal_active');
        }
    });
});
