const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu 

const mobileMenu = ()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling 

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');

    let scrollPos = window.scrollY;
    console.log(homeMenu)
    

    // Check scroll position and window width
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');

    } else if (window.innerWidth > 960 && scrollPos >= 600 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');

    } else if (window.innerWidth > 960 && scrollPos >= 1400 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');

    } else {
        // Remove highlight if scrolling out of section
        if (elem) {
            elem.classList.remove('highlight');
        }
    }
}
    window.addEventListener('scroll', highlightMenu)
    window.addEventListener('click', highlightMenu)

    

    // Close mobo nav when clicking an item in

    const hideMobileMenu = ()=>{
        const menuBars = document.querySelector('.is-active')
        console.log(menuBars)
        if(window.innerWidth <= 768 && menuBars){
            menu.classList.toggle('is-active')
            menuLinks.classList.remove('active')
            console.log("Inside")
        }
    }
    

    menuLinks.addEventListener('click', hideMobileMenu)
    navLogo.addEventListener('click', hideMobileMenu)