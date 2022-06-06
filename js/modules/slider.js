
export const slider = () => {
    const sliderBlock = document.querySelector('.top-slider')
    console.log(sliderBlock.children);

    for (const element of sliderBlock.children) {
        element.querySelector('.table').classList.add('active')
    }

    const newSlide = () => {
        const sliders = [...sliderBlock.children]
        sliderBlock.removeChild(sliders[0])
        sliderBlock.appendChild(sliders[0])

    }

    setInterval(() => {
        newSlide()
    }, 3000)

}

