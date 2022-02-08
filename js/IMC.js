//Obtencion de datos del HTML
const formIMC = document.getElementById('imc')
const clasificacion = document.getElementById('clasificacion')

formIMC.addEventListener('submit', (event) => {
    event.preventDefault()

    //Reset de los estilos de la lista de resultados por si se ha introducido un valor anteriormente
    for (let i=2; i<clasificacion.children.length; i++) {
        clasificacion.children[i].style.color = "black" 
    }

    //verificaciones de valores
    let altura = (formIMC.elements[0].value)/100
    let peso = formIMC.elements[1].value

    // Formula IMC
    let imc = peso / (altura)**2

    //coger solo dos decimales 
    document.getElementById('resultado-imc').innerHTML = `<br>Su indice de masa corporal es de <b>${imc.toFixed(2)}</b> puntos.`
    

    //cambiar de color segun el resultado del IMC
    if (imc<16) {
        clasificacion.children[2].style.color = "red"
    } else if (imc>=16 && imc<=16.99) {
        clasificacion.children[3].style.color = "red"
    } else if (imc>=17 && imc<=18.49) {
        clasificacion.children[4].style.color = "red"
    } else if (imc>=18.50 && imc<=24.99) {
        clasificacion.children[5].style.color = "limegreen"
    } else if (imc>=25 && imc<=29.99) {
        clasificacion.children[6].style.color = "red"
    } else if (imc>=30 && imc<=34.99) {
        clasificacion.children[7].style.color = "red"
    } else if (imc>=35 && imc<=40)  {
        clasificacion.children[8].style.color = "red"
    } else if (imc>40) {
        clasificacion.children[9].style.color = "red"
    }
    console.log(clasificacion. children[3])
    contenedor[0].style.height = `${(bloque[0].clientHeight)+20}px`
})