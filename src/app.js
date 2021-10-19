let sayi1 = 10;
sayi1 = "Engin Demiroğ"
let student={id:1,name:"Engin"}
console.log(student);

function save(puan=20,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
save(undefined,student);

let students2=[student,{id:2,name:"Halit"},"Ankara",{city: "İstanbul"}]
console.log(students2)

//rest parameters
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
//showProducts(10,"Elma","Armut")

//spread
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructiring
let populations = [10000,20000,30000]
let [small,medium,high] = populations
// console.log(small)
// console.log(medium)
// console.log(high)

function someFunction ([small3],number){
    console.log(small3)
}
someFunction(populations)

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category 
console.log(id)
console.log(name)

