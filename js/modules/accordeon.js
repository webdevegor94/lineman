export const accordeon = () => {
    const elements = document.querySelectorAll('.accordeon .element')

    const close = (element) => {
        element.classList.remove('active')
        element.querySelector('.element-content').style.display = 'none'
    }

    const open = (element) => {
        element.classList.add('active')
        element.querySelector('.element-content').style.display = 'block'
    }

    const callback = (event) => {
        const currentTarget = event.currentTarget

        if (currentTarget.classList.contains('active')) {
            close(currentTarget)
        } else {
            open(currentTarget)
        }

        elements.forEach((element) => {
            if (element !== currentTarget) {
                close(element)
            }
        })


    }

    elements.forEach((element) => {
        element.addEventListener('click', callback)

    })

}