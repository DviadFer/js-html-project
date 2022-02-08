//Script para gestionar las pestañas de los ejercicios.

const boton = document.querySelectorAll('.boton') //Se puede hacer de ambas maneras, con queryselectroall o getelementsbyclass.
console.log(boton)
const bloque = document.getElementsByClassName('sub-bloque')
console.log(bloque)
const contenedor = document.getElementsByClassName('bloque')
console.log(contenedor)

//Esta lína recoge la altuna del contenedor para luego ajustar a la altura del tamaño del bloque.
contenedor[0].style.height = `${(bloque[0].clientHeight)+20}px`

//Este bucle es identico al explicado en el vídeo-tutorial.
boton.forEach ((elemento, i)=>{
    
    boton[i].addEventListener('click', ()=>{
        
        boton.forEach((elemento, i)=>{
            boton[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

        boton[i].classList.add('activo')
        bloque[i].classList.add('activo')

        //Aqui se ajusta el contenedor al tamaño del bloque correspondiente.
        contenedor[0].style.height = `${(bloque[i].clientHeight)+20}px`
         
    })
})

