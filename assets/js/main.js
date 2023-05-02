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
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== HABILIDADES CON EL ACORDEÓN ====================*/


/*==================== FICHAS DE CUALIFICACIÓN ====================*/


/*==================== SERVICIO MODAL ====================*/


/*==================== DESLIZAR PORTAFOLIO  ====================*/



/*==================== SECCIONES DE DESPLAZAMIENTO ENLACE ACTIVO ====================*/


/*==================== CAMBIAR EL FONDO DE LA CABECERA ====================*/


/*==================== MOSTRAR DESPLAZAMIENTO HACIA ARRIBA ====================*/


/*==================== DARK LIGHT TEMA ====================*/ 