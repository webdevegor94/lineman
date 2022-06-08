export const forms = () => {
    const nameInput = document.querySelector('.form-control')
    const telInput = document.querySelector('.tel')

    nameInput.addEventListener('input', (e) => {
        nameInput.value = e.target.value.replace(/[^А-Яа-яёЁ]/ig, '')
    })
    telInput.addEventListener('input', (e) => {
        telInput.value = e.target.value.replace(/[^0-9+]/ig, '')
    })
}