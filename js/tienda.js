//Obtencion de datos del HTML de tienda y carrito
const compra = document.getElementById('compra')
const tarjetas = document.getElementsByClassName('tarjeta')
document.getElementById('carrito').innerHTML = '<p>Sin items que comprar.</p>' //Se muestra si el carrito está vacío


compra.addEventListener('submit', (evento) => {
    evento.preventDefault()
    //Items de nuestro carrito
    var carrito = []

    //Serecorren los formularios de las tarjetas de la tienda
    for (let i=0; i<compra.length-1; i++) {
        if (parseInt(compra[i].value)!=0) {
            //Si hay unidades seleccionadas, se añaden al carrito con un objeto
            carrito.push({
                imagen: tarjetas[i].childNodes[1].src,
                nombre: tarjetas[i].childNodes[3].innerHTML,
                cantidad: compra[i].value,
                precio: (tarjetas[i].childNodes[7].innerHTML).charAt(8)+(tarjetas[i].childNodes[7].innerHTML).charAt(9)
            })
            console.log(carrito)
        }
        //Se resetea a 0 los valores del formulario despues de añadir todos los items al carrito
        compra[i].value = 0
    }

    if (carrito.length == 0) {
        //Se avisa al usario que no hay ningún item en el carrito.
        alert('Carrito vacío.')
        //Se vacia el carrito.
        document.getElementById('carrito').innerHTML = '<p>Sin items que comprar.</p>'
    } else {
        
        //Esta funcion sirve para mostrar en la pestña del carrito el contenido del array carrito[]
        function contenido() {
            let contenido = ''
            let precioTotal = 0
            for (let i=0; i<carrito.length; i++) {
                contenido += `
                    <div class="articulo">
                        <img src="${carrito[i].imagen}" alt="producto">
                        <div class='detalles'>
                            <p><b>${carrito[i].nombre}</b></p>
                            <p>Unidad/es: ${carrito[i].cantidad}</p>
                            <p>Precio: ${parseInt(carrito[i].precio)*parseInt(carrito[i].cantidad)} €</p>
                        </div>
                    </div>
                    <hr class='separadorArticulo'>
                `
                precioTotal += parseInt(carrito[i].precio)*parseInt(carrito[i].cantidad) 
            }
            //Se muestra el precio individual*unidades seleccionadas y la suma de total de la compra
            contenido += `
                <h2>Precio total: ${precioTotal} €</h2>
            `
            
            return contenido
        }

        //Se llama a la funcion para imprimir el html
        document.getElementById('carrito').innerHTML = contenido()

        //Se avisa al uusario cuando se llena el carrito.
        alert('Se ha añadido la compra al carrito.')
    }
})

