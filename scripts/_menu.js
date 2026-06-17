(function () {
    const logo = document.querySelector('#logo-container');
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Fetch and inject the logo SVG inline so CSS can target #rim for the hover animation
    // and CSS custom properties (fill="var(--clr-text-primary)") resolve correctly.
    fetch('assets/navigation/logo.svg')
        .then(r => r.text())
        .then(svgText => {
            const tmp = document.createElement('div');
            tmp.innerHTML = svgText.trim();
            const svg = tmp.querySelector('svg');
            if (svg) {
                // Insert before the type-logo <p>
                logo.insertBefore(svg, logo.firstChild);
            }
        })
        .catch(() => { /* logo silently missing – non-critical */ });

    const menuIcon = document.querySelector('#menu-icon');
    const menu = document.querySelector('#menu');
    const menuList = document.querySelector('#menu-list')

    menuIcon.addEventListener('click', () => {
        const isOpen = menuIcon.getAttribute('class') === 'open';
        menuIcon.setAttribute('class', isOpen ? 'closed' : 'open');
        menu.style.setProperty('height', isOpen ? '0px' : `${menuList.clientHeight + 10}px`);
    });

    const mediaQuery = window.matchMedia('(min-width: 50em)');
    setMedia(menu, mediaQuery);

    mediaQuery.addEventListener('change', (mediaQuery) => {
        setMedia(menu, mediaQuery);

        if (menuIcon.getAttribute('class') === 'open') {
            menuIcon.setAttribute('class', 'closed');
        }
    });
})();

function setMedia(menu, mediaQuery) {
    const isDesktop = mediaQuery.matches;
    menu.style.setProperty('height', isDesktop ? 'auto' : '0px');
}