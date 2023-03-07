const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function() {
    let x = randomArray(5, 1, 100);
    console.log(x);
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