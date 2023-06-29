let word = ''; // This is an empty string that will hold the word that other players need to guess
let guessedLetters = []; // This is an array that will hold the letters that have been guessed
let incorrectGuesses = 0; // This will count how many incorrect guesses have been made


const wordInput = document.getElementById('wordInput');
const submitWord = document.querySelector('#submitWord');
const wordSetup = document.querySelector('#wordSetup');
const gameSpotLight = document.querySelector('#gameSpotLight');
const wordSpotLight = document.querySelector('#wordSpotLight');
const keyboard = document.querySelector('#keyboard');
const hangManCanvas = document.querySelector('#hangManCanvas');
const hangmanCanvasContext = hangManCanvas.getContext('2d');        //document.querySelector. Then, a 2D drawing context is retrieved using the getContext('2d') method. The context is an object with properties and methods that  are used to render graphics inside the canvas element.
let btnCr = false;
let winCr = false;
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
let dashesElements = [];
let height = '30vw'


let guessesLeft; // Variable for the number of guesses left

class DrawLine {
    constructor(context, startX, startY, endX, endY) {
        this.context = context;
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }

    draw() {
        this.context.beginPath();
        this.context.moveTo(this.startX, this.startY);
        this.context.lineTo(this.endX, this.endY);
        this.context.stroke();
    }
}
class DrawCircle {
    constructor(context, centerX, centerY, radius) {
        this.context = context;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2, true);
        this.context.stroke();
    }
}


function drawHangingPost() {
    // Vertical post
    let verticalPost = new DrawLine(hangmanCanvasContext, 22, 10, 22, 148);
    verticalPost.draw();

    // Horizontal beam
    let horizontalBeam = new DrawLine(hangmanCanvasContext, 22, 10, 150, 10);
    horizontalBeam.draw();

    // Short vertical line
    let shortVerticalLine = new DrawLine(hangmanCanvasContext, 150, 10, 150, 25);
    shortVerticalLine.draw();
}

function drawHangmanBody(incorrectGuesses) {
    switch (incorrectGuesses) {
        case 1:
            // Head
            let head = new DrawCircle(hangmanCanvasContext, 150, 38, 12);
            head.draw();
            break;
        case 2:
            // Body
            let body = new DrawLine(hangmanCanvasContext, 150, 50, 150, 80);
            body.draw();
            break;
        case 3:
            // Left arm
            let leftArm = new DrawLine(hangmanCanvasContext, 150, 50, 100, 60);
            leftArm.draw();
            break;
        case 4:
            // Right arm
            let rightArm = new DrawLine(hangmanCanvasContext, 150, 50, 200, 60);
            rightArm.draw();
            break;
        case 5:
            // Left leg
            let leftLeg = new DrawLine(hangmanCanvasContext, 150, 80, 100, 100);
            leftLeg.draw();
            break;
        case 6:
            // Right leg
            let rightLeg = new DrawLine(hangmanCanvasContext, 150, 80, 200, 100);
            rightLeg.draw();
            break;
        default:
            break;
    }
}





submitWord.addEventListener('click', (event) => {
    if (!btnCr) {
        const reset = document.createElement('button');
        reset.setAttribute('id', 'reset');
        reset.textContent = 'RESET';
        hangManCanvas.style.height = '30vw';
        hangManCanvas.style.width = '25vw';
        hangManCanvas.style.marginTop = '-5%';

        hangManCanvas.style.backgroundColor = 'green';
        gameSpotLight.style.display = 'flex';
        gameSpotLight.style.textAlign = 'center';

        const gContainerMain = document.createElement('div');
        gContainerMain.classList.add('gContainerMain');
        const gContainer = document.createElement('div');
        gContainer.classList.add('gContainer');
        const guesses = document.createElement('h3');
        guesses.setAttribute('id', 'guesses');
        gContainer.setAttribute('id', 'guessesContainer');
        guesses.textContent = 'GUESSED LETTERS';
        gContainer.style.backgroundColor = 'red';
        gContainerMain.setAttribute('id', 'gContainerMain');
        gContainerMain.style.height = '15vw';
        gContainerMain.style.top = '0%';
        gContainerMain.style.marginTop = '2%';

        wordSpotLight.style.display = 'flex';
        wordSpotLight.style.justifyContent = 'space-evenly';
        wordSpotLight.style.flexDirection = 'column';
        gContainerMain.style.display = 'flex';
        gContainerMain.style.justifyContent = 'space-evenly';
        gContainerMain.style.flexDirection = 'row';
        console.dir('START HERE');
        word = wordInput.value;
        console.log(word);
        console.dir('ends here');
        guessesLeft = word.length + 5; // Set the number of guesses allowed

        for (let i = 0; i < word.length; i++) {
            // Creating HTML content
            let dashes = document.createElement('h2');
            dashes.innerText = '_';
            dashesElements.push(dashes); // Store the dash element
            gContainerMain.appendChild(dashes);
        }
        gameSpotLight.appendChild(reset);
        gContainer.appendChild(guesses);
        wordSpotLight.appendChild(gContainer);
        wordSpotLight.appendChild(gContainerMain);

        btnCr = true;
    }
    wordSetup.style.display = 'none';
    gameSpotLight.style.display = 'block';

    // Keyboard section

    alphabet.forEach(function (letter) {
        let btn = document.createElement('button');
        btn.value = letter;
        btn.textContent = letter;
        keyboard.appendChild(btn);
    });

    drawHangingPost();
});



gameSpotLight.addEventListener('click', (event) => {
    if (event.target.id === 'reset') {
        wordSetup.style.display = 'block';
        gameSpotLight.style.display = 'none';
        keyboard.innerHTML = '';
        wordInput.value = '';
        reset.remove();
        btnCr = false;
        wordSpotLight.innerHTML = '';
        word = ''; // Reset word
        guessedLetters = []; // Reset guessed letters
        incorrectGuesses = 0; // Reset incorrect guesses
        dashesElements = []; // Reset dashesElements array
        hangmanCanvasContext.clearRect(0, 0, hangManCanvas.width, hangManCanvas.height)

    }
    console.log(event.target.id);
});

keyboard.addEventListener('click', (event) => {
    let guessedLetter = event.target.value;
    let correctGuess = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === guessedLetter) {
            correctGuess = true;
            dashesElements[i].innerText = guessedLetter;
        }
    }

    if (!correctGuess) {
        winCr = true;
        incorrectGuesses++; // Increase the number of incorrect guesses

        drawHangmanBody(incorrectGuesses); // Draw hangman part

        if (incorrectGuesses >= 6) {
            // Game over, all hangman parts drawn
            setTimeout(() => {
                alert("You lost!");
            }, 200); // Delay alert for 200 milliseconds
        }
    } else {
        winCr = true;
        // Check if the word has been guessed
        const currentGuessedWord = dashesElements.map((element) => element.innerText).join('');
        if (currentGuessedWord === word) {

            setTimeout(() => {
                alert("You've guessed the word!");
            }, 200); // Delay alert for 200 milliseconds
        }
    }

});


