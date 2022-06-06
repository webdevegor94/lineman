export const scrollUp = () => {
    const imgUp = document.querySelector('img.up')
    imgUp.addEventListener('click', function (e) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

    // todo 
    // при прокрутке до 'наши услуги' скрыть стрелку

}

