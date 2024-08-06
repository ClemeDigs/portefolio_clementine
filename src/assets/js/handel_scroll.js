const themeStylesheet = document.getElementById('theme-stylesheet');

function handelScroll() {
    const header = document.querySelector('body header');
/*     const btnFlecheUp = document.getElementById('btn-up'); */

    if (document.documentElement.scrollTop > 100) {
        header.classList.add('minimized');
/*         btnFlecheUp.classList.remove('hidden'); */
    } else {
        header.classList.remove('minimized');
/*         btnFlecheUp.classList.add('hidden'); */
    }
}


if (themeStylesheet.getAttribute('href') === './assets/css/themeColor/main.css') {
    window.onscroll = () => {
        handelScroll();
    }
}
