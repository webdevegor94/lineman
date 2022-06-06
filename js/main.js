import { modalHandler } from "./modules/modalHandler"
import { menu } from "./modules/menu"

export const main = () => {
    // modalHandler('.mobile-menu .callback-btn', 'block')
    modalHandler('.header .callback-btn', 'block', {
        modalSelector: '.modal-callback',
        modalOverlaySelector: '.modal-overlay'
    })
    modalHandler('.modal-close', 'none', {
        modalSelector: '.modal-callback',
        modalOverlaySelector: '.modal-overlay'
    })
    modalHandler('.quest-section .button-services', 'block', {
        modalSelector: '.modal-callback',
        modalOverlaySelector: '.modal-overlay'
    })

    menu()
}
