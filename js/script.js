const container = document.getElementById('container');
const playButton = document.getElementById('play-button');
const numbersToGuess = 5




playButton.addEventListener('click', function() {
    let x = randomArray(numbersToGuess, 1, 100);
    console.log(x);

    playButton.style.display='none';

    let div = document.createElement("div");
    div.innerText = x;
    container.append(div);

});




//FUNCTION: create an array of random numbers---------------------------
function randomArray(arrayLenght, min, max) {

    const numbersArray = []; //empty array
    
    while (numbersArray.length < arrayLenght) {
    
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        // check to avoid duplicate numbers
        if (!numbersArray.includes(randomNumber)) {
    
            numbersArray.push(randomNumber);
    
        };
    
    };
    
    return numbersArray;
    
};