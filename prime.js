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
// checkPrime(3);Tota

// TO DO!!! b.	akes in n (numbers) as a parameter and returns first n prime numbers
