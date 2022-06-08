export const scrollUp = () => {
    const imgUp = document.querySelector('img.up')
    const serviceNode = document.querySelector('#services')
    const servicePositionTop = serviceNode.getBoundingClientRect().top
    const initialBodyPositionTop = Math.abs(document.body.getBoundingClientRect().top)

    if (initialBodyPositionTop < servicePositionTop) {
        imgUp.style.display = 'none'
    } else {
        imgUp.style.display = 'block'
    }

    document.addEventListener('scroll', () => {
        const bodyPositionTop = Math.abs(document.body.getBoundingClientRect().top)
        if (bodyPositionTop < servicePositionTop) {
            imgUp.style.display = 'none'
        } else {
            imgUp.style.display = 'block'
        }
    })

    imgUp.addEventListener('click', function (e) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
}

