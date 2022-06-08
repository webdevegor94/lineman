const defaultModalMeta = {
    modalSelector: '.modal-callback',
    modalOverlaySelector: '.modal-overlay'
}

export const modalHandler = (selector, display, modalMeta = defaultModalMeta) => {
    const button = document.querySelector(selector)

    button.addEventListener('click', (e) => {
        e.preventDefault()
        const modal = document.querySelector(modalMeta.modalSelector)
        const modalOverlay = document.querySelector(modalMeta.modalOverlaySelector)

        modal.style.display = display
        modalOverlay.style.display = display

    })
}

export const modalHandlers = (selector, display, modalMeta = defaultModalMeta) => {
    const buttons = document.querySelectorAll(selector)
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const modal = document.querySelector(modalMeta.modalSelector)
            const modalOverlay = document.querySelector(modalMeta.modalOverlaySelector)

            modal.style.display = display
            modalOverlay.style.display = display

        })
    })
}