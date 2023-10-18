const menu = document.getElementById("menu")
const menuBtn = document.getElementById("menuBtn")

const showHideMenu = () => {
    menu.classList.toggle("scale-x-0")
}

menuBtn.addEventListener("click",showHideMenu)