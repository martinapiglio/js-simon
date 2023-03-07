const container = document.getElementById('container');
const playButton = document.getElementById('play-button');
const numbersToGuess = 5;
const milliseconds = 1000;

playButton.addEventListener('click', function() {

    let numbersToGuessArray = randomArray(numbersToGuess, 1, 100);

                //CHECK
                console.log(numbersToGuessArray);
                //CHECK

    playButton.style.display='none';

    let numbersToGuessContainer = document.createElement("div");
    numbersToGuessContainer.innerText = numbersToGuessArray;
    container.append(numbersToGuessContainer);

    setTimeout(function() {

        numbersToGuessContainer.style.display='none';

    }, milliseconds * 10);


    //la funzione seguente parte 2 secondi dopo la scomparsa dei numeri random
    setTimeout(function() {

        const userNumbers = [];

        while (userNumbers.length < 5) {
            
            let userNo = Number(prompt(`Inserisci uno dei numeri`));

            if (!isNaN(userNo) && (userNo > 0) && (userNo <= 100)) {

            userNumbers.push(userNo);

            } else {
                
            alert('Devi inserire un numero compreso tra 1 e 100!');

            };

        };

        console.log(userNumbers);

        numbersToGuessContainer.style.display='block';

        let numbersGuessed = document.createElement("div");
        numbersGuessed.innerText = userNumbers;
        container.append(numbersGuessed);

    }, milliseconds * 12);

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