
export const slider = () => {
    let sliderBlock = document.querySelector('.top-slider')

    for (const element of sliderBlock.children) {
        element.querySelector('.table').classList.add('active')
    }

    const newSlide = () => {
        let copySliderBlock = [...sliderBlock.children];

        sliderBlock.replaceChildren(
            ...[
                ...copySliderBlock.slice(1),
                ...copySliderBlock.slice(0, 1)
            ]
        )
    }

    let timerId = setTimeout(function tick() {
        newSlide();
        timerId = setTimeout(tick, 3000);
    }, 3000);

}

