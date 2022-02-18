"use strict";

//making reference // target element
const colorContainer= document.querySelector(".color-container")
const h1 = document.querySelector("h1")

//function to generate random color
function colorGenerator(){
    //create any random number in between 0-255 =>Math.floor(Math.random()*256)
    const color= `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
/* 
    console.log(color) */
    return color;
}




function guessColor(){
    colorContainer.innerHTML=""
    let count = 0;
    let allColors= []
    //run a loop and push color into our allColors array
    for(let i= 0;i<6 ;i++){
        allColors.push(colorGenerator())
    }
    
    let colorToGuess = allColors[Math.floor(Math.random()*allColors.length)]
    h1.textContent=colorToGuess;

    function guessingColor(event){
        console.log("user clicked")
        count++;
        if(event.target.style.backgroundColor === colorToGuess){
            alert(`You Won, you guessed right color in ${count} attempt`)
        }else{
            alert(`wrong guess,made ${count} attempt,try again`)
        }
        if(count===3){
            guessColor()
        }
    }
    
    allColors.forEach(color=>{
        const box = document.createElement("div")
       /*  box.classList.add("color-box") */ //remove //toggle //contains
        box.className="color-box";
        box.style.backgroundColor=color
        box.addEventListener("click",guessingColor)
        
        colorContainer.appendChild(box)
    
    })
    
}


guessColor()


