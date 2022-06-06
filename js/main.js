import { modalHandler, modalHandlers } from "./modules/modalHandler"
import { menu } from "./modules/menu"
import { forms } from "./modules/forms"
// import { sendForm } from "./modules/sendForm"
import { slider } from "./modules/slider"
import { scrollUp } from "./modules/scrollUp"


export const main = () => {

    // modalHandler('.mobile-menu .callback-btn', 'block')
    modalHandler('.header .callback-btn', 'block')
    modalHandler('.modal-close', 'none')
    modalHandler('.quest-section .button-services', 'block')
    modalHandlers('.services-carousel .element', 'block')
    menu()
    forms()
    // sendForm()
    slider()
    scrollUp()
}
