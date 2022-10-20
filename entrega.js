const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Bienbenido a Nuestro Sitio',
  showConfirmButton: true,
  timer: 3500
})
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      actualizarCarrito()
  }
})

botonVaciar.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Seguro desea Vaciar el Carrito?',
      text: "esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Borrar Todo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Borrado!',
          'El Carrito Esta Vacio',
          'success'
        )
      } else if (
        
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'tus Articulos aun continuan en el Carrito :)',
          'error'
        )
      }
    })
})

stockProductos.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('producto')
  div.innerHTML = `
  <img src=${producto.img} alt= "">
  <h3>${producto.nombre}</h3>
  <p>${producto.desc}</p>
  <p>Presentacion: ${producto.presentacion}</p>
  <p class="precioProducto">Precio:$ ${producto.precio}</p>
  <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fa fa-shopping-cart"></i></button>
  `
  contenedorProductos.appendChild(div)

  const boton = document.getElementById(`agregar${producto.id}`)

  boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id)
      Swal.fire({
          position: 'center',
          icon: 'success',
          showConfirmButton: false,
          timer: 1000
        })
  })
})

const agregarAlCarrito = (prodId) => {

  const existe = carrito.some (prod => prod.id === prodId)
  if (existe){ 
      const prod = carrito.map (prod => { 
          
          if (prod.id === prodId){
              prod.cantidad++
          }
      })
  } else { 
      const item = stockProductos.find((prod) => prod.id === prodId)
      carrito.push(item)
  }
  actualizarCarrito()  
}

const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)

  const indice = carrito.indexOf(item)

  carrito.splice(indice, 1) 
  actualizarCarrito()  
  console.log(carrito)
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "" 

  carrito.forEach((prod) => {
      const div = document.createElement('div')
      div.className = ('productoEnCarrito')
      div.innerHTML = `
      <p>${prod.nombre}</p>
      <p>Precio:$${prod.precio}</p>
      <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
      <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fa fa-trash-alt"></i></button>
      `
      contenedorCarrito.appendChild(div)
      localStorage.setItem('carrito', JSON.stringify(carrito))
  })
  contadorCarrito.innerText = carrito.length 
  console.log(carrito)
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}