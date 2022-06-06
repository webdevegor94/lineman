const renderDots = (countSliders, currentSlide) => {
    // 1. положить в html li.dot в кол-ве countSliders
    // 2. тек слайду (currentSlide) - указать доп класс li.dot-active
    const ul = document.querySelector('.portfolio-dots')

    for (let i = 0; i < countSliders; i++) {
        const li = document.createElement('li');
        li.classList.add('dot')

        if (currentSlide === i) {
            li.classList.add('dot-active')
        }
        ul.append(li)
    }
}


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

