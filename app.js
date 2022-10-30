// Cesar Cipher
function encryptString(){
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const newAlphabet = [...alphabet] // used for replace items
    let cesarCipherAlphabet = new Array;
    let sentence = 'EPICKA PRZYGODA TRZECH RYCERZY';
    let sentenceArray = sentence.split('');
    // console.log(sentenceArray)
    let sentenceCipher = new Array;
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
        let found = newAlphabet.indexOf(sentenceArray[i])
        sentenceCipher.push(found);
        sentenceCipher[i] = cesarCipherAlphabet[sentenceCipher[i]]
        if(sentenceCipher[i] === undefined){
            sentenceCipher[i] = ' '
        }
        // console.log(sentenceCipher)
    }
    let result = sentenceCipher.join('');
    console.log('Your encrypted word is ' + result)    
}
encryptString()

function decryptString(){
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const newAlphabet = [...alphabet] // used for replace items
    let cesarCipherAlphabet = new Array;
    let sentence = 'BMFZHX MOWVDLAX QOWBZE OVZBOWV';
    let sentenceArray = sentence.split('');
    // console.log(sentenceArray)
    let sentenceCipher = new Array;
    let shift = 3;

    for(let i = 0; i < shift; i++){
        let cutAndPush = alphabet.pop();
        cesarCipherAlphabet.unshift(cutAndPush)
        //   console.log(cesarCipherAlphabet);
    }
    // conecting arrays
    cesarCipherAlphabet = cesarCipherAlphabet.concat(alphabet);

    for(let i = 0; i < sentence.length; i++){
        let found = cesarCipherAlphabet.indexOf(sentenceArray[i]);
        sentenceCipher.push(found)
        sentenceCipher[i] = newAlphabet[sentenceCipher[i]];
        if(sentenceCipher[i] === undefined){
            sentenceCipher[i] = ' '
        }
    }
    let result = sentenceCipher.join('');
    console.log('Your decrypted word is ' + result)    
}
decryptString()