document.querySelectorAll('.rotator').forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function rotate() {
        cases[currentIndex].classList.remove('rotator__case_active');
        cases[currentIndex].style.color = '';

        currentIndex = (currentIndex + 1) % cases.length;

        const currentCase = cases[currentIndex];
        currentCase.classList.add('rotator__case_active');
        currentCase.style.color = currentCase.dataset.color;

        const speed = parseInt(currentCase.dataset.speed) || 1000;
        setTimeout(rotate, speed);
    }

    rotate();
});
