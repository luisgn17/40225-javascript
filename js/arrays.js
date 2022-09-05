let primerArray1 =   [2,24,22,91,43,45,33,3,90,['fin','comunicado']]
primerArray1.sort((a, b) => {
    if(a == b) {
      return 0; 
    }
    if(a < b) {
      return -1;
    }
    return 1;
  });
const found = primerArray1.find(element => element > 4);
console.log(primerArray1)
console.log(found)



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

