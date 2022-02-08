//Array de actividades y dias de la semana
const actividades = ['Spinning', 'Pilates', 'Aerobic', 'Yoga', 'Baloncesto', 'Futbol', 'Body-Pump', 'Entrenamiento Funcional', 'Gimnasia Rítmica', 'Boxeo', 'Zumba', 'Taekwondo']
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

//Creación de las tablas del horario de mañana
function contenidoMañana() {
    let contenido = ''
    for (let i=0; i<5; i++) {
        contenido += `<table><caption>${diasSemana[i]}</caption>`
        for (let hora=0; hora<3; hora++) {
            contenido += `
                <tr>
                    <td class='hora'>${(hora*2)+9}:00 - ${(hora*2)+11}:00</td>
                    <td>${actividades[Math.floor(Math.random()*actividades.length)]}</td>
                </tr>
            `
        }
        contenido += '</table>'
    }
    return contenido
}

//Creación de las tablas del horario de tarde
function contenidoTarde() {
    let contenido = ''
    for (let i=0; i<7; i++) {
        contenido += `<table><caption>${diasSemana[i]}</caption>`
        for (let hora=0; hora<5; hora++) {
            contenido += `
                <tr>
                    <td class='hora'>${hora+16}:00 - ${hora+17}:00</td>
                    <td>${actividades[Math.floor(Math.random()*actividades.length)]}</td>
                </tr>
            `
        }
        contenido += '</table>'
    }
    return contenido
}

//Se rellenan los divs del html con la info
document.getElementById('horarioAM').innerHTML = contenidoMañana()
document.getElementById('horarioPM').innerHTML = contenidoTarde()