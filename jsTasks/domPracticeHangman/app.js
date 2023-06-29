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
