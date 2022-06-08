export const sendForm = () => {
    const form = document.querySelector('form[name="form-callback"]')
    const name = document.querySelector('.form-control')
    const tel = document.querySelector('.tel')
    const statusBlock = document.createElement('div')
    const modalCallback = document.getElementById('callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Отправлено'

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const user = {
            username: name.value,
            phone: tel.value
        }

        statusBlock.textContent = loadText
        form.append(statusBlock)
        const a = 1

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }

            })

            if (response.status === 404) {
                throw new Error('Ошибка отправки формы')
            } else {
                const data = await response.json()
                console.log(data)
                statusBlock.textContent = successText
                form.append(statusBlock)
                setTimeout(() => {
                    name.value = ''
                    tel.value = ''
                    statusBlock.textContent = ''
                    modalCallback.style.display = 'none'
                    modalOverlay.style.display = 'none'
                }, 3000)

            }
        } catch (error) {
            console.log(error)
            statusBlock.textContent = errorText
            form.append(statusBlock)
        }
    })

}