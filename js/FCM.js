//Obtencion de datos del HTML
const formFCM = document.getElementById('fcm')

formFCM.addEventListener('submit', (event) => {
    event.preventDefault()

    //Verificaciones de valores
    let sexo = formFCM.elements[0].value
    let edad = formFCM.elements[1].value
    let fcm = 0
    console.log(sexo, edad)

    /*
    Se ha empleado la siguiente fórmula:
    https://www.vitonica.com/entrenamiento/calcula-tu-frecuencia-cardiaca-maxima#:~:text=Frecuencia%20card%C3%ADaca%20m%C3%A1xima%20en%20entrenados&text=Diferenciamos%20entre%20hombres%20y%20mujeres,(0%2C8%20x%20edad)
    */

    //Adaptar la formula según el sexo
    if (sexo === 'Hombre')
        fcm = 209-(edad*0.7) 
    else if (sexo === 'Mujer') 
        fcm = 214-(edad*0.8) 
    
    //Display del resultado de la formula y los valores según su zon a correspondiente.
    document.getElementById('resultado').innerHTML = `<br>Su frecuencia máxima cardíaca con los datos introducidos es de <b>${fcm} pulsaciones por minuto</b>.`
    

    document.getElementById('reposo').innerHTML = `<br>Zona de reposo <b>(50 - ${(fcm*0.6).toFixed(1)})</b>`
    document.getElementById('recuperacion').innerHTML = `Zona de recuperación <b>(${(fcm*0.6).toFixed(1)} - ${(fcm*0.7).toFixed(1)})</b>`
    document.getElementById('aerobica').innerHTML = `Zona de aeróbica <b>(${(fcm*0.7).toFixed(1)} - ${(fcm*0.8).toFixed(1)})</b>`
    document.getElementById('anaerobica').innerHTML = `Zona de anaeróbica <b>(${(fcm*0.8).toFixed(1)} - ${(fcm*0.9).toFixed(1)})</b>`
    document.getElementById('roja').innerHTML =  `Línea roja <b>(${(fcm*0.9).toFixed(1)} - ${fcm})</b>`
    contenedor[0].style.height = `${(bloque[1].clientHeight)+20}px`
})








