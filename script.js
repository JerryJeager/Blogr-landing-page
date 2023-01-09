const fixedHeader = document.querySelector('.logo-and-hamburger')
const hamburger = document.querySelector(".hamburger")
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const connect = document.querySelector('.connect')
const connectImg = document.querySelector(".connect-img")
const connectItems = document.querySelector('.connect-items')
const hideConnectImg = document.querySelector('.display-arrow')
const navBar = document.querySelector('nav')
const navContents = document.querySelector('nav').innerHTML
const signUp = document.querySelector('.signup')
let navItems = {
    product: ["product-img", "product-items"],
    company: ["company-img", "company-items"],
    connect: ["connect-img", "connect-items"]
}

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

function displayNavItems(nav) {
    for (let item in nav) {
        document.querySelector(`.${item}`).addEventListener('click', () => {
            document.querySelector(`.${nav[item][0]}`).classList.toggle('display-arrow')
            document.querySelector(`.${nav[item][1]}`).classList.toggle('display-items')
        })
    }
}

displayNavItems(navItems)

signUp.addEventListener('mouseover', () => {
    signUp.querySelector('p').classList.add('signupHover')
})

window.addEventListener('scroll', () => {
    if(window.scrollY >= 30){
        fixedHeader.classList.add("logo-and-hamburger-fixed")
    }
    else{
        fixedHeader.classList.remove("logo-and-hamburger-fixed")
    }
})