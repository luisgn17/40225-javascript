let url = './productos.json'

fetch(url)
.then(response => response.json())
.then( data => mostrarData(data) )
.catch(err => console.log(err))
  
    console.log(data)

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (let i = 0; i < data.length; i++) {      
       body+=`
       <tr>
       <td>${data[i].id}</td>
       <td>${data[i].nombre}</td>
       <td>${data[i].precio}</td>
       <td>${data[i].tipo}</td>
       <td>${data[i].cantidad}</td>
       <td>${data[i].contacto}</td>
       </tr>
       `
    }
    document.getElementById('data').innerHTML = body
}