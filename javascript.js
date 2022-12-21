
let header = document.querySelector("nav");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {
    header.classList.toggle("shadow",window.scrollY > 0)

})


// menu.onclick = () => {
//     navbar.classList.toggle("navbar");
//     navbar.classList.toggle("active");
// }

// window.onscroll = () => {
//     navbar.classList.remove("navbar");
// }

// menu.addEventListener("click" , () => {
//     navbar.classList.toggle(".active");
// });


// menu.onclick = () => {
//     navbar.classList.toggle(".active");
// };

const darkMode = document.querySelector(".darkmode"); 

function changeMode(){
    let myBody = document.body;
    myBody.classList.toggle("dark-bg");

    if(darkMode.classList.contains("bx-moon")){
        darkMode.classList.replace("bx-moon", "bx-sun");
        darkMode.classList.add( "bx-sun");
    }

    else{
        darkMode.classList.replace( "bx-sun", "bx-moon");
        darkMode.classList.add( "bx-moon");
    }
}




