window.addEventListener('scroll', function() {
    const secondaryHeader = document.querySelector('.secondary-header-container');
    const mainHeaderContainer = document.querySelector('.header-container');
    const mainHeaderLogo = document.querySelector('.logo');
    if (window.scrollY > 100) {
        mainHeaderContainer.classList.add('shrink');
        mainHeaderLogo.classList.add('shrink');
        secondaryHeader.classList.add('show');
    } else {
        mainHeaderLogo.classList.add('shrink');
        mainHeaderContainer.classList.remove('shrink');
        secondaryHeader.classList.remove('show');
    }
});