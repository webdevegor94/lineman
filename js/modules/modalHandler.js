export const modalHandler = (selector, display, modalMeta) => {
    const button = document.querySelector(selector)

    button.addEventListener('click', (e) => {
        e.preventDefault()
        const modal = document.querySelector(modalMeta.modalSelector)
        const modalOverlay = document.querySelector(modalMeta.modalOverlaySelector)

        modal.style.display = display
        modalOverlay.style.display = display

    })

}

