document.querySelector("main").addEventListener("click", (event) => {
let clicked=event.target
if(clicked.classList.contains("btn")){
    clicked.nextElementSibling.classList.toggle("hide")
}
})