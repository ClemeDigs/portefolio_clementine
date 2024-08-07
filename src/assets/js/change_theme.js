import imgFemmeColor from '../img/femme-color.png';
import imgFemmeColor2 from '../img/femme-color-02.png';
import imgFemmeDark from '../img/femme-dark-01.png';
import imgFemmeDark2 from '../img/femme-dark-02.png';
import imgFemmeClassic from '../img/femme-classique.png';

const btnSwitchTheme = document.querySelector('.theme-switcher');
const bannerRight = document.querySelector('.banner__right')
const imgBanner = document.querySelector('.img__banner');
const imgBanner2 = document.querySelector('.img__banner-2');
const themeStylesheet = document.getElementById('theme-stylesheet');
const header = document.querySelector('header');
const sectionHero = document.querySelector('.section-hero');
const sectionProjets = document.querySelector('.mes-projets');


btnSwitchTheme.addEventListener('click', () => {
    imgBanner.style.opacity = 0;
    setTimeout( () => {
        if (themeStylesheet.getAttribute('href') === '/assets/css/themeColor/main.css') {
            themeStylesheet.setAttribute('href', '/assets/css/themeDark/main.css');
            imgBanner.setAttribute('src', imgFemmeDark);
            imgBanner2.setAttribute('src', imgFemmeDark2);
        } else if (themeStylesheet.getAttribute('href') === '/assets/css/themeDark/main.css') {
            themeStylesheet.setAttribute('href', '/assets/css/themeClassic/main.css');
            imgBanner.setAttribute('src', imgFemmeClassic);
            imgBanner2.setAttribute('src', imgFemmeClassic);
        } else {
            themeStylesheet.setAttribute('href', '/assets/css/themeColor/main.css');
            imgBanner.setAttribute('src', imgFemmeColor);
            imgBanner2.setAttribute('src', imgFemmeColor2);
        } 
        imgBanner.style.opacity = 1;
        sectionHero.classList.add('animate__animated', 'animate__fadeInUp')
    }, 1000);
});

btnSwitchTheme.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === '/assets/css/themeColor/main.css') {
        header.classList.add('animate__animated', 'animate__fadeOutUp');
        sectionProjets.classList.add('animate__animated', 'animate__slideOutRight');
    } 
});

header.addEventListener('animationend', () => {
    header.classList.remove('animate__fadeOutUp');
    header.classList.add('animate__slideInDown');
});

sectionProjets.addEventListener('animationend', () => {
    sectionProjets.classList.remove('animate__slideOutRight');
    sectionProjets.classList.add('animate__slideInRight');
});


imgBanner2.addEventListener('mouseover', () => {
    imgBanner.style.opacity = 0;
    imgBanner2.style.opacity = 1;
});

imgBanner2.addEventListener('mouseout', () => {
    imgBanner.style.opacity = 1;
    imgBanner2.style.opacity = 0;
});
