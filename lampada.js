document.addEventListener("DOMContentLoaded", () => {
    const on = document.querySelector('#on')
    const off = document.querySelector('#off')
    const lampada = document.querySelector('img')


    on.addEventListener('click', () => {
        lampada.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
    })

    off.addEventListener('click', () => {
        lampada.src = 'https://www.w3schools.com/js/pic_bulboff.gif'
    })

    lampada.addEventListener("mouseover", () => {
        lampada.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
    })

    lampada.addEventListener("mouseout", () => {
        lampada.src = 'https://www.w3schools.com/js/pic_bulboff.gif'
    })
})
