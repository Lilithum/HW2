function findPrime(... numbers) {
    
    for (let i =0 ; i< numbers.length; i++) {
       let isPrime=true
       if(numbers[i]<=1){
           console.log(numbers[i]+" : Sayı 1'den büyük olmalı")
           continue
       }
       for(let j=2; j<=numbers[i]/2; j++){
           if(numbers[i]%j==0){
               console.log(numbers[i]+" : Asal sayı değildir")
               isPrime=false
               break
           }
       }
       if(isPrime){
           console.log(numbers[i]+" : Asal sayıdır")
       } 
    }   
}
findPrime(111,8,3,1)