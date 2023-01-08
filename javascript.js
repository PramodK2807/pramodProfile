
let header = document.querySelector("nav");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {
    header.classList.toggle("shadow",window.scrollY > 0)

})

const darkMode = document.querySelector("#darkBtn");
console.log(darkMode.classList);

darkMode.addEventListener("click", () => {
    if(darkMode.classList.contains("bx-moon")){
        darkMode.classList.remove("bx-moon");
        darkMode.classList.add("bx-sun");   
    }
    else{
        darkMode.classList.add("bx-moon");
        darkMode.classList.remove("bx-sun"); 
    }
})

function changeMode(){
    let myBody = document.body;
    myBody.classList.toggle("dark-bg");
}


const careerEl = document.querySelector(".career");

careerEl.style.color = "red";
careerEl.style.fontWeight = "bold";
careerEl.style.fontSize = "25px";

const careersArray = ["Frontend Developer", "Freelancer", "YouTuber", "Engineer"];

let careerIndex = 0;

let characterIndex = 0;

updateText();


function updateText() {
    characterIndex++;
    careerEl.innerText = ` ${careersArray[careerIndex].slice(0,1) === "E"? "An":"A"} ${careersArray[careerIndex].slice(0,characterIndex)}`;

    


    if(characterIndex === careersArray[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careersArray.length ){
        careerIndex= 0;
    }
    setTimeout(updateText, 150)
}



const allATags = document.getElementsByTagName("a");

// console.log(allATags);
for (let i=7; i<allATags.length; i++){
    // console.log(allATags[i]);
    allATags[i].setAttribute("target" ,"_blank");
    // console.log(allATags[i]);
}