class menu {
  constructor(nombre, id) {
    this.nombre = nombre
    this.id = id
    this.comida = [
      {
        nombre: 'Simple',
        impuestos: [
          {
          precio: 850,
          iva: this.generarIva(),
          },
          {
          precio: 950,
          iva: this.generarIva(),
          },
          {
          precio: 1050,
          iva: this.generarIva(),
          },
        ],
      },
      {
        nombre: 'Doble',
        impuestos: [
          {
              precio: 1150,
              iva: this.generarIva(),
          },
          {
              precio: 1250,
              iva: this.generarIva(),
          },
          {
              precio: 1350,
              iva: this.generarIva(),
          },
        ],
      },
      {
        nombre: 'Triple',
        impuestos: [
          {
              precio: 1450,
              iva: this.generarIva(),
          },
          {
              precio: 1550,
              iva: this.generarIva(),
          },
          {
              precio: 1650,
              iva: this.generarIva(),
          },
        ],
      },
    ]
  }

  generarIva() {
    return Math.floor(Math.random() * 20 + 1)
  }

  anadirComida(nombre){
    const hamburg = {nombre:nombre}
    this.comida.push(hamburg)
  }
}
const newMenu = []
const nuevaOrden = new menu('Mesa', 1)
nuevaOrden.anadirComida('Cuadruple')
newMenu.push(nuevaOrden)
const nuevaOrden2 = new menu('Quinta', 2)
newMenu.push(nuevaOrden2)
const libre = new menu('libre', 3)
newMenu.push(libre)
console.log(newMenu)

const tipoMenuSeleccionado = parseInt(
  prompt('Ingrese el tipo de menu: 1. Menu 1 - 2. Menu 2 - 3.libre')
)
const existeTipoDeMenu = newMenu.find(
  (pres) => pres.id === tipoMenuSeleccionado
)
console.log(existeTipoDeMenu)

const IvaSeleccion = parseInt(
  prompt('A caul iva deseas pagar el Menu?: 6, 12 o 28')
)
const comida = existeTipoDeMenu.comida
console.log(comida)


const arrayIvaSegunSeleccionado = []
comida.forEach((comida) => {
  const ivaArray = hamburg.impuestos
  console.log(ivaArray)
  const ivaPorMenu = ivaArray.find(
    (impuestos) => impuestos.precio === ivaMenu
  )
  console.log(ivaPorMenu)
  arrayIvaSegunSeleccionado.push({
    nombre: hamburg.nombre,
    iva: ivaPorMenu.iva,
  })
})
console.log(ivaArray)
console.log(arrayIvaSegunSeleccionado)

arrayIvaSegunSeleccionado.sort((a, b) => a.iva - b.iva)
console.log(arrayIvaSegunSeleccionado)
const mejorOpcion = arrayIvaSegunSeleccionado[0]
console.log(mejorOpcion)

const CuantoPagaras = parseInt(prompt('Ingrese el monto que pagar: '))

const CuotaPaga = CuantoPagaras / IvaSeleccion
const TotalPagar =
CuotaPaga * (mejorOpcion.impuestos/ 100)
const cuotaTotal = CuotaPaga + TotalPagar

alert(
  `El nejor precio que ofrece es ${mejorOpcion.nombre} con un valor de $${cuotaTotal} por un pago`
)