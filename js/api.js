const url = 'https://api.covidtracking.com/v1/us/20200501.json'

fetch(url)
.then(response => response.json())
.then(data => {
    let element = document.getElementById('elem')
    element.innerHTML = `
    Datos Covid-19 Estados Unidos
    <p>Fecha: ${data.dateChecked}</p>
    <p>Muertes: ${data.death}</p>
    <p>Hospitalizados: ${data.hospitalized}</p>
    <p>Casos Negativos: ${data.negative}</p>
    <p>Falsos Positivos: ${data.pending}</p>
    <p>Casos Positivos: ${data.positive}</p>
    <p>Estados: ${data.states}</p>
    <p>Total Resultado Test Covid 19: ${data.totalTestResults}</p>  
    `
    console.log(data)
})
.catch(err => console.log(err))