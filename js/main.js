import { modalHandler, modalHandlers } from "./modules/modalHandler"
import { menu } from "./modules/menu"
import { forms } from "./modules/forms"
// import { sendForm } from "./modules/sendForm"
import { slider } from "./modules/slider"
import { scrollUp } from "./modules/scrollUp"


export const main = () => {
    const defaultModalMeta = {
        modalSelector: '.modal-callback',
        modalOverlaySelector: '.modal-overlay'
    }
    // modalHandler('.mobile-menu .callback-btn', 'block')
    modalHandler('.header .callback-btn', 'block', defaultModalMeta)
    modalHandler('.modal-close', 'none', defaultModalMeta)
    modalHandler('.quest-section .button-services', 'block', defaultModalMeta)
    modalHandlers('.services-carousel .element', 'block', defaultModalMeta)
    menu()
    forms()
    // sendForm()
    slider()
    scrollUp()
}
