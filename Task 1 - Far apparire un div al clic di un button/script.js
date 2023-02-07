const tooglebutton = document.querySelector(".button")
const show = document.querySelector(".show")
 
tooglebutton.addEventListener("click", () => {
    show.style.display = "block"
    tooglebutton.style.display = "none"
})
