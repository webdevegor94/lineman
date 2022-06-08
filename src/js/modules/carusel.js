export const carousel = () => {
    const parent = document.querySelector('.services-carousel')
    const children = [...parent.children]

    const showFirst3Elements = () => {
        children.forEach((element, index) => {
            if (index >= 3) {
                parent.removeChild(element)
            }
        })
    }

    const arrRight = document.querySelector('.arrow-right')
    const arrLeft = document.querySelector('.arrow-left')

    arrRight.addEventListener('click', () => {
        const deletedElement = children.shift()
        children.push(deletedElement)
        parent.replaceChildren(...children)
        showFirst3Elements()
    })

    arrLeft.addEventListener('click', () => {
        const delElement = children.pop()
        children.unshift(delElement)
        parent.replaceChildren(...children)
        showFirst3Elements()
    })
    showFirst3Elements()
}