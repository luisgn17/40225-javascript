const contenedorModelo = document.getElementsByClassName('modelo-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modeloCarrito = document.getElementsByClassName('modelo-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModelo.classList.toggle('modelo-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModelo.classList.toggle('modelo-active')
})

contenedorModelo.addEventListener('click', (event) =>{
    contenedorModelo.classList.toggle('modelo-active')

})
modeloCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})