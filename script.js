
const userInput = document.querySelector('#input-num');
const form = document.querySelector('form');

const Result = document.querySelector('.result');
const allGuesses = document.querySelector('.AllYourGuess');


const submitButton = document.querySelector('.submit-btn');
const startAgain = document.querySelector('.btn-2')
const allGuessArray = []
let randomNumber = Math.round(Math.random()*100);


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if(userInputValue < randomNumber)
    {
        Result.innerText = "Too Low!!!"
    }
    else if(userInputValue >randomNumber )
    {
        Result.innerText = "Too High!!"   
    }
    else{
        Result.innerText = " You got it , Congrates!!!" 
        startAgain.disabled = false;
        submitButton.disabled = true;  
    }
    allGuessArray.push(userInputValue);
    allGuesses.innerText = "your Guesses " + allGuessArray.join(', ');

    form.reset();
})


startAgain.addEventListener('click',()=>{
    Result.innerText = "" ; 
    allGuesses.innerText = "";
    startAgain.disabled = true;
    submitButton.disabled = false; 
    randomNumber = Math.round(Math.random()*100);
})
