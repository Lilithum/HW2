//question 3
function perfectNumbers(number){

    for(let ix = 0; ix < number; ix++){
        let totall = 0;
        for(let y = 1; y <= ix; y++){
            if(ix % y == 0){
                totall = totall + y;
            }
        }
        if((totall == 2*ix) && ix >= 2){
            console.log(ix + " sayısı mükemmel bir sayıdır.");
        }
    }

}

perfectNumbers(1000);