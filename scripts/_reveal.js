(function () {
    window.addEventListener('load', () => {
        document.querySelectorAll('.no-reveal').forEach(elem => {
            elem.classList.remove('no-reveal');
            elem.classList.add('reveal');
        });
    });
})();