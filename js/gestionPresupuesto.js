// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

"use strict";

let presupuesto = 0;

function actualizarPresupuesto(valor)
 {
   let cantidad = Number(valor);

   if(isNaN(cantidad) || cantidad < 0)
   {
    console.error("error, el presupuesto introducido no es válido");
    return -1
   }
    presupuesto = cantidad;
    return presupuesto
}

function mostrarPresupuesto() {
    return "Tu presupuesto actual es de " + presupuesto + " €";
}

function CrearGasto(descripcion, valor)
{
    let cantidad = Number(valor);
    let valorFinal;
    
    if(cantidad <= 0 || isNaN(cantidad) )
    {
        valorFinal = 0;
    }
    else
    {
        valorFinal = cantidad;
    }

    let gasto = {
        descripcion: descripcion,
        valor: valorFinal
    };

    return gasto;
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
