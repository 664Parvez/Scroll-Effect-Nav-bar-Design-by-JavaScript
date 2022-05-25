window.addEventListener('scroll', () => {
    let navBar = document.getElementById('nav-bar')

    if (window.scrollY > 0) {
        navBar.style.background = '#126830'
        navBar.style.transition = '.5s'
    } else {
        navBar.style.background = 'transparent'
        navBar.style.transition = '.5s'
    }
})