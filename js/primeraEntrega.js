const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('Precio-Total')
const cantidad = document.getElementById('cantidad')
const cantidadTotal = document.getElementById('cantidadTotal')
let carrito = []
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        // renovarCarrito()
    }
})
let stockProductos = [
    {id: 1, nombre: "cera depilatoria Rep", Tipo:"cera", cantidad: 1, desc: "Cera", precio: 300, tamaño:"Peq", img:'./Depimiel/1.jpg'},
    {id: 2, nombre: "algabo 1", Tipo:"cera", cantidad: 1, desc: "alcohol en gel", precio: 300, tamaño:"l", img:'./Depimiel/2.png'},
    {id: 3, nombre: "algabo 1", Tipo:"cera", cantidad: 1, desc: "alcohol en gel", precio: 300, tamaño:"l", img:'./Depimiel/3.png'},
    {id: 4, nombre: "algabo 1", Tipo:"cera", cantidad: 1, desc: "alcohol en gel", precio: 300, tamaño:"l", img:'./Depimiel/4.png'},
    {id: 5, nombre: "algabo 1", Tipo:"cera", cantidad: 1, desc: "alcohol en gel", precio: 300, tamaño:"l", img:'./Depimiel/5.png'},
    {id: 6, nombre: "algabo 1", Tipo:"cera", cantidad: 1, desc: "alcohol en gel", precio: 300, tamaño:"l", img:'./Depimiel/6.png'},
    {id: 7, nombre: "algabo 1", Tipo:"cera", cantidad: 1, desc: "alcohol en gel", precio: 300, tamaño:"l", img:'./Depimiel/7.png'},
    {id: 8, nombre: "algabo 1", Tipo:"cera", cantidad: 1, desc: "alcohol en gel", precio: 300, tamaño:"l", img:'./Depimiel/8.png'},
    {id: 9, nombre: "algabo 1", Tipo:"cera", cantidad: 1, desc: "alcohol en gel", precio: 300, tamaño:"l", img:'./Depimiel/9.png'},
    {id: 10, nombre: "algabo 1", Tipo:"cera", cantidad: 1, desc: "alcohol en gel", precio: 300, tamaño:"l", img:'./Depimiel/10.png'}];


// botonVaciar.addEventListener('click', () => {
//     carrito.length = 0
//     renovarCarrito()
// })

stockProductos.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('producto')
  div.innerHTML = `
  <img src=${producto.img} alt="">
  <h3>${producto.nombre}</h3>
  <p>${producto.desc}</p>
  <p>Tamaño: ${producto.tamaño}</p>
  <p class="precioProducto">Precio:$ ${producto.precio}</p>
  <button id="agregar${producto.id}" class=boton-agregar">Agregar</button>
  `
  contenedorProductos.appendChild(div)

const boton = document.getElementById(`agregar${producto.id}`)

boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
})  
})
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    
    if (existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}
renovarCarrito()
}
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId) 
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    renovarCarrito()
    console.log(carrito)
}



const renovarCarrito = () => { 
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnElCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"></button>
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito',JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}