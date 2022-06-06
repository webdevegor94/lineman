export const forms = () => {
    const nameInput = document.querySelector('.form-control')
    const tel = document.querySelector('.tel')
    const validText = function (e) {
        this.value = e.target.value.replace(/[^А-Яа-яёЁ]/ig, '')
    }
    tel.addEventListener('input', (e) => {
        tel.value = e.target.value.replace(/[^0-9+]/ig, '')
    })
    nameInput.addEventListener('input', validText)

}