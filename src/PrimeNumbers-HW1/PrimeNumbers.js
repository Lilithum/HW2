// Question 1

function isPrime(x) {
    let total = false;

    for (let y = 2; y <= (x / 2); y++) {
        if (x < 2) {
            total = false

        }
        else if (x % y == 0) {
            total = false
            y = x

        }
        else {
            total = true
        }

    }
    return total
}

function findPrime(...numbers) {

    for (let i = 0; i <= numbers.length; i++) {

        if (isPrime(numbers[i])) {
            console.log(numbers[i] + "sayısı bir asal sayıdır.")

        }
        else {
            console.log(numbers[i] + "sayısı bir asal sayı değildir.")
        }
    }
}

findPrime(5)