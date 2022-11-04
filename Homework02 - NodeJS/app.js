const math = require('./math');
const os = require('os');
const fs = require('fs');
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
// exerciseEight()

// function exerciseTen(){
//     let a = process.argv[]
// }
// exerciseTen();



fs.readFile('a.txt', 'utf8', function (err, data) {
    if (err) {
      console.log(err)
    } else {
        return data
    }
});
fs.readFile('b.txt', 'utf8', function (err, data) {
    if (err) {
      console.log(err)
    } else {
        return data
    }
});

var arguments = process.argv
function add(x, y) {
    if(x, y){
        return parseInt(x)+parseInt(y) 
    } else {
        console.log('Need more parameters')
    }
}
  
var sum = add(arguments[2], arguments[3])
  
console.log(sum)