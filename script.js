// exercise 1
let sampleArray = [1, 6, 23, 8, 4, 8, 3, 7];
//let sampleArray = [1, 2, 3, 5, 7, 8, 12, 13, 16, 18, 22, 25, 32, 132, 333, 55]

function arrayCheck(){
    let sum = null;
    for (let i = 0; i < sampleArray.length; i++){
        sum += sampleArray[i];
        if (i === sampleArray.length - 1){
            console.log(sum)
        } 
    }
}
// arrayCheck();

function firstLastElement(){
    let firstElement = sampleArray.slice(0,1);
    let lastElement = sampleArray.slice(sampleArray.length - 1);
    let sum = parseInt(firstElement) + parseInt(lastElement);
    console.log(sum);
}
// firstLastElement()
// TO DO!!!
function reverseArrayWithoutReverse(){
    let array = [1, 2, 3, 4, 5];
    let reversedArray = new Array;
    for(let i = array.length - 1; i >= 0; i--){
        let reverse = array.pop();
        reversedArray.push(reverse);
    }
    console.log(reversedArray)
    
}
reverseArrayWithoutReverse()
function theBiggestNumber(){
    let attempts = 3;
    let array = [];
    for(let i = 0; i < attempts; i++){
        let randomNumbers = sampleArray[Math.floor(Math.random() * sampleArray.length)]
      //  console.log(randomNumbers)
        array.push(randomNumbers);
        console.log(array)
    }
    console.log('The lowest number from given array is ' + Math.min(...array))
}
// theBiggestNumber()

function firstWayToReturnArrayInRandomOrder(){
    let output = sampleArray.sort((a, b) => 0.5 - Math.random());
    console.log('First way to shuffle array ' + output)
}
// firstWayToReturnArrayInRandomOrder();

function secondWayToReturnArrayInRandomOrder(){
    for(let i = sampleArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = sampleArray[i];
        sampleArray[i] = sampleArray[j];
        sampleArray[j] = temp;
    }
    console.log(sampleArray)
}
// secondWayToReturnArrayInRandomOrder();

function sumOddItems(){
    let sum = null;
    for (let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            sum += sampleArray[i];
        }
    }
    console.log(sum);
}
// sumOddItems()

function addAndSubtract(){
    let sumOdd = null;
    let sumEven = null;
    for (let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 !== 0){
            sumOdd += sampleArray[i];
        }
    }
    for (let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            sumEven += sampleArray[i];
        }
    }
    let output = sumEven - sumOdd;
    console.log('Even - odd equals ' + output);
}
// addAndSubtract()

function daysToFriday(){
    const today = new Date();
    const weekday = today.getDay();
    const friday = 5;
    daysToFriday = friday - weekday;
    if(weekday < 6){
        console.log('There is ' + daysToFriday + ' days to friday!');
    } else{
        console.log('Friday was yesterday :( There is 6 days to friday...')
    }
}
// daysToFriday()

function getFibonacci(n){
    if(n===0){
        return 0;
    }
    if(n === 1){
        return 1
    }
    return getFibonacci(n -1) + getFibonacci(n - 2);
}
let result = getFibonacci(12);
console.log(result)