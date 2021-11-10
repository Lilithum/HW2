//question 2

function friendsNumbers(numberOne,numberTwo) {
    let sumNumOne = 0;
    let sumNumTwo = 0;

    for(let i = 0; i < numberOne; i++){
        if(numberOne % i == 0){
            sumNumOne = sumNumOne + i;
        }
    }

    for(let i = 0; i < numberTwo; i++){
        if(numberTwo % i == 0){
            sumNumTwo = sumNumTwo + i;
        }
    }

    if(numberOne == sumNumTwo && numberTwo == sumNumOne){
        console.log(numberOne + " ve " + numberTwo + " arkadaş sayılardır.")
    }
    else{
        console.log(numberOne + " ve " + numberTwo + " arkadaş sayılar değildir.")
    }
}

friendsNumbers(220,284);  // arkadaş sayılardır.
friendsNumbers(200,100);  // arkadaş sayılar değildir.