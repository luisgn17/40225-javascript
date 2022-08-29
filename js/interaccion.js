let totalConsumo = 0
let productoSeleccionado = parseInt
(prompt("ingrese el numero del menu: 1- hambunguesa con papas 2- hambunguesa 3- gaseosa 4- cerveza 5- nachos"))
let seguirAgregando = true
let seleccion
while (seguirAgregando === true) {
    if(productoSeleccionado===1) {
        totalConsumo = totalConsumo + 1350
    }else if(productoSeleccionado===2) {
        totalConsumo = totalConsumo + 850
    }else if(productoSeleccionado===3) {
        totalConsumo = totalConsumo + 370
    }else if(productoSeleccionado===4) {
        totalConsumo = totalConsumo + 550
    }else if(productoSeleccionado===5) {
        totalConsumo = totalConsumo + 980
    }else{
        productoSeleccionado = parseInt(prompt("su seleccion no es valida, 1- hambunguesa con papas 2- hambunguesa 3- gaseosa 4- cerveza 5- nachos"))
        continue
    }
    seleccion = parseInt(prompt("desea agregar algo adicional a su orden? 1- Si  -  2- No"))
if (seleccion === 1){
    productoSeleccionado = parseInt(prompt("ingrese el numero del menu: 1- hambunguesa con papas 2- hambunguesa 3- gaseosa 4- cerveza 5- nachos"))
}else if(seleccion === 2){
    seguirAgregando = false
}
}
alert("su compra sin el cargo por servicios e impuestos es de: "+totalConsumo)
function calculoServicios(valor) {
    let servicio = 0
    if(valor<=1000){
        servicio = 10
    }else if(valor>1000 && valor<=1500){
        servicio = 11
    }else if(valor>1500 && valor<=2000){
        servicio = 12
    }else if(valor>2500 && valor<=3000){
        servicio = 13
    }else if(valor>3500 && valor<=4000){
        servicio = 15
    }
    let valorServicio = valor*(servicio/100)
    valor = valor + valorServicio
    return valor
}
let valorConServicio = calculoServicios(totalConsumo)
alert("el cargo por servicios sin impuestos es de: "+valorConServicio)

function precioFinal(valor){
    const impuestos = valor *(21/100)
    return valor + impuestos
}
let valorTotal = precioFinal(valorConServicio)
alert("el total de cargo por servicios e impuestos es de: "+valorTotal)

