// Cesar Cipher
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const newAlphabet = [...alphabet]
let cesarCipherAlphabet = new Array;
let sentence = 'EPICKA PRZYGODA TRZECH RYCERZY ELF KRASNOLUD I CZŁOWIEK';
let sentenceCipher = '';
let shift = 3;
// cut letters and shift them
for(let i = 0; i < shift; i++){
    let cutAndPush = alphabet.pop();
    cesarCipherAlphabet.unshift(cutAndPush)
 //   console.log(cesarCipherAlphabet);
}
// conecting arrays
cesarCipherAlphabet = cesarCipherAlphabet.concat(alphabet);
// console.log(cesarCipherAlphabet)

for(let i = 0; i < sentence.length; i++){
    let currentLetter = sentence[i];
    sentenceCipher += currentLetter;
    newAlphabet[i] = 
    console.log(sentenceCipher)
    // let currentIndex = alphabet.indexOf(currentLetter);
    // let newIndex = currentIndex + shift;
}