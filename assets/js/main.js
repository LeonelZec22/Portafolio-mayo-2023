/*==================== MOSTRAR MENU Y OCULTARLO ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MOSTRAR MENU =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== OCULTARLO MENU =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== ELIMINAR EL MENÚ MÓVIL ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Cuando pulsamos sobre cada nav__link, eliminamos la clase show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== HABILIDADES CON EL ACORDEÓN ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
/*==================== FICHAS DE CUALIFICACIÓN ====================*/


/*==================== SERVICIO MODAL ====================*/


/*==================== DESLIZAR PORTAFOLIO  ====================*/



/*==================== SECCIONES DE DESPLAZAMIENTO ENLACE ACTIVO ====================*/


/*==================== CAMBIAR EL FONDO DE LA CABECERA ====================*/


/*==================== MOSTRAR DESPLAZAMIENTO HACIA ARRIBA ====================*/


/*==================== DARK LIGHT TEMA ====================*/ 