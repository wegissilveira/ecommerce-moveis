/* *Floating Menus* */

let bg = document.getElementById('backgroundTeste');
let mainSubMenu = document.getElementById('mainSub-1--js');

function openBg() {
    bg.style.display = "block";
}

function closeBg() {
    bg.style.display = "none";
}

/* *Floating Menu* */
function openMenu(n) {
    let menu = document.getElementById('floatingMenu'+n)
    menu.style.display = "block";
    let menuLeft = menu.getBoundingClientRect().x

    let title = document.getElementsByClassName('header__menu--sub-mainItem')
    let titleLeft = title[n - 1].getBoundingClientRect().x
    let titleWidth = title[n - 1].clientWidth

    let iconArrow = document.getElementById('floatingMenu'+n).children[0]
    let iconArrowWidth = iconArrow.clientWidth
    let arrowPosition = titleLeft + ((titleWidth / 2) - iconArrowWidth / 2) - menuLeft

    iconArrow.style.left = arrowPosition + 'px'

    openBg();
}

function closeMenu(n) {
    document.getElementById('floatingMenu'+n).style.display = "none";
    closeBg();
}

// /* */
function openSubMenu1() {
    mainSubMenu.style.display = "block";
}

function closeSubMenu1() {
    mainSubMenu.style.display = "none";
}


/* *Floating Banners* */

/* Floating Banner */
function openFloatingBanner(n) {
    let title = document.getElementsByClassName('header__menu--sub-mainItem')
    let titleLeft = title[n + 2].getBoundingClientRect().x
    let titleWidth = title[n + 2].clientWidth

    let banner = document.getElementById('banner'+n)
    banner.style.display = "block";
    let bannerLeft = banner.getBoundingClientRect().x

    let iconArrow = document.getElementsByClassName('header__menu--floatingImage-'+n)[0].children[0]
    let iconArrowWidth = iconArrow.clientWidth
    let arrowPosition = titleLeft + ((titleWidth / 2) - iconArrowWidth / 2) - bannerLeft

    iconArrow.style.left = arrowPosition + 'px'

    openBg();
}

function closeFloatingBanner(n) {
    document.getElementById('banner'+n).style.display = "none";
    closeBg();
}

