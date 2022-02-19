//button

const mainButton = document.querySelector("button");
// console.log(mainButton);

//body
const body = document.querySelector("body");
// console.log(body);

//current Color text 
const currentColor = document.querySelector(".current-color");
// console.log(currentColor);


//Random Color Generator
function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}



//add Event Listner

mainButton.addEventListener("click", ()=>{
    // console.log("You Clicked Me!!!");
    const randomColor = randomColorGenerator();
    // console.log(randomColor);
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
    
})