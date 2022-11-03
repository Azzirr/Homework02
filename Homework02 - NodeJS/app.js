const math = require('./math');
let fs = require('fs');
let a = fs.readFileSync('a.txt');
let b = fs.readFileSync('b.txt');
// console.log('3 + 5 = ', math.add(3, 5));
// console.log('4 - 7 = ', math.sub(4, 7));
// console.log('6 * 2 = ', math.mul(6, 2));
// console.log('8 / 2 = ', math.div(8, 2));

function exerciseEight(){
    const resultAdd = parseInt(a) + parseInt(b);
    const resultSub = parseInt(a) - parseInt(b);
    const resultMul = parseInt(a) * parseInt(b);
    const resultDiv = parseInt(a) / parseInt(b);
    
    fs.writeFileSync('result.txt', resultAdd.toString() + '\n');
    fs.appendFileSync('result.txt', resultSub.toString() + '\n')
    fs.appendFileSync('result.txt', resultMul.toString() + '\n')
    fs.appendFileSync('result.txt', resultDiv.toString() + '\n')

}
exerciseEight()