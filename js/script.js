const container = document.getElementById('container');
const playButton = document.getElementById('play-button');
const inputSection = document.getElementById('input');
const generaButton = document.getElementById('genera-button');
const numbersToGuess = 5;
const milliseconds = 1000;

playButton.addEventListener('click', function() {

    let numbersToGuessArray = randomArray(numbersToGuess, 1, 100);

                //CHECK
                console.log(numbersToGuessArray);
                //CHECK

    playButton.style.display='none';
    document.getElementById('click-play').style.display='none';

    let textContainer1 = document.createElement("div");
    let numbersToGuessContainer = document.createElement("div");

    textContainer1.innerHTML = "I numeri da ricordare sono:"

    for (let i = 0; i < numbersToGuessArray.length; i++) {

        numbersToGuessContainer.innerHTML += '<span>' + numbersToGuessArray[i] + '</span>';
      
    };

    textContainer1.classList.add('text');
    numbersToGuessContainer.classList.add('text');

    container.append(textContainer1);
    container.append(numbersToGuessContainer);

    setTimeout(function() {

        textContainer1.style.display='none';
        numbersToGuessContainer.style.display='none';

    }, milliseconds * 3);


    //la funzione seguente parte 2 secondi dopo la scomparsa dei numeri random
    setTimeout(function() {

        const userNumbers = [];

        inputSection.style.display='block';

        generaButton.addEventListener('click', function() {

            let userNo1 = parseInt(document.getElementById('input1').value);
            let userNo2 = parseInt(document.getElementById('input2').value);
            let userNo3 = parseInt(document.getElementById('input3').value);
            let userNo4 = parseInt(document.getElementById('input4').value);
            let userNo5 = parseInt(document.getElementById('input5').value);

            userNumbers.push(userNo1);
            userNumbers.push(userNo2);
            userNumbers.push(userNo3);
            userNumbers.push(userNo4);
            userNumbers.push(userNo5);  

            inputSection.style.display='none';

            //A SEGUIRE COMMENTATA VERSIONE CON PROMPT

            // while (userNumbers.length < 5) {
                
            //     let userNo = Number(prompt("Inserisci i numeri nell'ordine giusto"));

            //     if (!isNaN(userNo) && (userNo > 0) && (userNo <= 100)) {

            //     userNumbers.push(userNo);

            //     } else {
                    
            //     alert('Devi inserire un numero compreso tra 1 e 100!');

            //     };

            // };

            console.log(userNumbers);

            textContainer1.style.display='block';
            numbersToGuessContainer.style.display='block';

            let textContainer2 = document.createElement("div");
            let numbersGuessed = document.createElement("div");

            textContainer2.innerHTML = "I numeri che hai inserito sono:"

            for (let i = 0; i < userNumbers.length; i++) {
        
                numbersGuessed.innerHTML += '<span>' + userNumbers[i] + '</span>';
            
            };

            textContainer2.classList.add('text');
            numbersGuessed.classList.add('text');
        
            container.append(textContainer2);
            container.append(numbersGuessed);

            const answerArray = arraysEqual(numbersToGuessArray, userNumbers);

            console.log(answerArray);

            let correctAnswersContainer = document.createElement("div");

            if (answerArray.length == 0){

                correctAnswersContainer.innerText= "Mi dispiace, non hai indovinato nemmeno un numero...";
            
            } else if ((answerArray.length > 0) && (answerArray.length < 5)) {

                correctAnswersContainer.innerText = "Hai indovinato questo/i numero/i: ( " + answerArray + " ) e hai totalizzato " + answerArray.length + " punto/i.";
            
            } else {

                correctAnswersContainer.innerText = "Grande, hai indovinato tutti i numeri!";
            
            };

            correctAnswersContainer.classList.add('result');

            container.append(correctAnswersContainer);

        });
     
    }, milliseconds * 4);

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

//FUNCTION: check if two arrays are equal---------------------------
function arraysEqual(array1, array2) {

    const resultArray = [];
  
    for (let i = 0; i < array1.length; ++i) {

        if (array1[i] == array2[i]) {
  
            resultArray.push(array1[i]);
  
          };
  
    };

    return resultArray;

};