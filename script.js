const hamburger = document.querySelector(".hamburger")
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const connect = document.querySelector('.connect')
const connectImg = document.querySelector(".connect-img")
const connectItems = document.querySelector('.connect-items')
const hideConnectImg = document.querySelector('.display-arrow')
const navBar = document.querySelector('nav')


open.addEventListener("click", () => {
    open.style.display = "none"
    close.style.display = "block"
    navBar.classList.toggle('display-nav')
})

close.addEventListener('click', () => {
    close.style.display = "none"
    open.style.display = "block"
    navBar.classList.toggle('display-nav')
})

connect.addEventListener("click", () => {
    connect.classList.toggle('hide-connect')
    connectImg.classList.toggle('display-arrow')
    connectItems.classList.toggle('display-connect-items')
})

