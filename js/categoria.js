//Obtencion de datos del HTML
const formCategoria = document.getElementById('categoria')
const catTipo = document.getElementById('categoria-tipo')

formCategoria.addEventListener('submit', (event) => {
    event.preventDefault()

    //Reset de los estilos de la lista de resultados por si se ha introducido un valor anteriormente
    for (let i=2; i<catTipo.children.length; i++) {
        catTipo.children[i].style.color = "black" 
    }

    //Verificacion de valores
    let nombre = formCategoria.elements[0].value
    let edad = formCategoria.elements[1].value

    if (nombre == 0) {
        alert ('Ha de introducir un nombre en el campo.')
    } else {
        /*
        Se ha empleado la siguiente tabla de categorías (fútbol):
        https://es.wikipedia.org/wiki/Categor%C3%ADas_deportivas_por_edad
        */
        
        //Display del nombre
        document.getElementById('resultado-categoria').innerHTML = `<br>Hola, <b>${nombre}</b>. La categoría a la que perteneces está ahora resaltada.`

        //Resaltado de color azul según la edad
        if (edad >= 2013 ) {
            catTipo.children[2].style.color = "blue"
        } else if (edad == 2011 || edad ==2012 ) {
            catTipo.children[3].style.color = "blue"
        } else if (edad == 2009 || edad == 2010) {
            catTipo.children[4].style.color = "blue"
        } else if (edad == 2008 || edad == 2007) {
            catTipo.children[5].style.color = "blue"
        } else if(edad == 2006 || edad == 2005) {
            catTipo.children[6].style.color = "blue"
        } else if(edad == 2003 || edad == 2004) {
            catTipo.children[7].style.color = "blue"
        } else if(edad == 2001 || edad == 2002) {
            catTipo.children[8].style.color = "blue"
        } else if(edad <= 2000) {
            catTipo.children[9].style.color = "blue"
        }

        contenedor[0].style.height = `${(bloque[2].clientHeight)+20}px`
    }
})