function checkPrime(number){
    isPrime = true;
    if(number <= 1){
        console.log('Number which are less or equal to 1 can not be primal numbers!')
    } else if (number > 1){
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime === true) {
            console.log(number + ' is a prime number');
        } else {
            console.log(number + ' is not a prime number');
        }
    }
}
//checkPrime(2);

// TO DO!!! b.	akes in n (numbers) as a parameter and returns first n prime numbers

function findFirstPrimes(){
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
    let primeArray = new Array;
    let firstN = 4;
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > 1){
                let isPrime = true;
                for(let k = 2; k < array[j]; k++){
                    if(array[j] % k === 0){
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime === true){
                    primeArray.push(array[j]);
                }
            }
        }
    
    primeArray = [...new Set(primeArray)]
    primeArray = primeArray.slice(0, firstN)
    console.log(primeArray)
}
findFirstPrimes()