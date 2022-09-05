let primerArray1 =   ['hola','mundo','casa',3,'carro','array',['fin','comunicado']]
console.log(primerArray1)


function getPrimerArray (min, max) {
    return Math.floor(Math.random()* (max-min ))+min;
}
let array = [];
for (let i=1; i<=10;i++){
    array.push(getPrimerArray(1,100))
}

let array2 = array.slice()
array2.push(7)

console.log("array1")
console.log(array)

console.log("array2")
console.log(array2)