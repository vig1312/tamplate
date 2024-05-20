// const darkLight = document.querySelector("#darkLight")
// const lightMode = document.querySelector("#lightmode")
// let root = document.querySelector(":root")


// lightMode.addEventListener("click",function() {
//     let root = document.querySelector(":root")

//     root.style.setProperty("--bg-color", "#ffffff")
//     root.style.setProperty("--section-3-color", "black")
//     root.style.setProperty("--section-color", "#212121")
//     root.style.setProperty("--font-color", "#ffffff")
//     root.style.setProperty("--black-font", "black")
//     root.style.setProperty("--footer-bg", "#212121")
// })



// darkLight.addEventListener("click",function() {
//     let root = document.querySelector(":root")
    
//     root.style.setProperty("--bg-color", "#212121")
//     root.style.setProperty("--section-3-color", "white")
//     root.style.setProperty("--section-color", "white")
//     root.style.setProperty("--font-color", "white")
//     root.style.setProperty("--black-font", "white")
//     root.style.setProperty("--footer-bg", "#4e4d4e")
// })

let darkButton = document.querySelector("#lightmode")

darkButton.addEventListener("click",function() {
    document.body.classList.toggle("dark-theme")

})