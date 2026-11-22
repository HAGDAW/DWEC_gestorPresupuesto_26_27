import { calcularTotalGastos } from "./js/gestionPresupuesto";

let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(valor)
 {
    // 1. Convierte 'valor' a número.
    // 2. Si es NaN o menor que 0, imprime un console.error y devuelve -1.
    // 3. Si es válido, actualiza la variable global 'presupuesto' y devuélvela.
    let numero = Number(valor)
    if(isNaN(numero) || numero < 0)
    {
        console.error("Error")
        return -1;
    }
    else
    {
        presupuesto = numero
        return presupuesto;
    }
 }

 function mostrarPresupuesto() {
    // Devuelve exactamente el texto: "Tu presupuesto actual es de X €"
    return "Tu presupuesto actual es de " + presupuesto + " €"
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas)
{
    let tiempo = Date.parse(fecha);
    if(isNaN(tiempo))
    {
        this.fecha = Date.now();
    }
    else
    {
        this.fecha = tiempo
    }
    this.etiquetas = [];

    this.descripcion = descripcion;
    let numero = Number(valor)
    if(!isNaN(numero) && numero >= 0)
    {
        this.valor = numero;
    }
    else
    {
        this.valor = 0;
    }
    // VALIDACIÓN DEL VALOR
    // Comprueba si 'valor' es un número válido y >= 0.
    // Si lo es, guárdalo en this.valor. Si no, guarda un 0.

    
    // MÉTODOS
    // 1. this.mostrarGasto: Devuelve "Gasto correspondiente a DESCRIPCION con valor VALOR €"
    // 2. this.actualizarDescripcion: Cambia la descripción por el parámetro nuevo y la devuelve.
    // 3. this.actualizarValor: Valida el parámetro igual que arriba. Si es un número malo,
    // deja el valor como estaba. Si es bueno, lo actualiza.
    this.mostrarGasto = function() {
        return "Gasto correspondiente a " + this.descripcion + "con valor " + this.valor;
        // Devuelve el texto exacto: "Gasto correspondiente a DESCRIPCION con valor VALOR €"
        // Pista: acuérdate de usar this.descripcion y this.valor para sacar los datos.
    };

    this.actualizarDescripcion = function(nuevaDescripcion) {
        // 1. Actualiza this.descripcion asignándole el valor del parámetro 'nuevaDescripcion'
        // 2. Devuelve la descripción ya actualizada
        this.descripcion = nuevaDescripcion;
        return this.descripcion;
    };

    this.actualizarValor = function(nuevoValor) {
        // 1. Convierte 'nuevoValor' a Número y guárdalo en una variable.
        // 2. Haz el if para comprobar si es un número válido y mayor o igual a 0.
        // 3. Si es válido, actualiza this.valor con el nuevo número. 
        // 4. Si es inválido, no hagas nada para que se quede como estaba.
        let numero = Number(nuevoValor)
        if(!isNaN(numero) && numero >= 0)
        {
            this.valor = numero;
        }
    };

    this.actualizarFecha = function(nuevaFecha)
    {
        let fechaNuevisima = Date.parse(nuevaFecha);
        if(!isNaN(fechaNuevisima))
        {
            this.fecha = fechaNuevisima;
        }
    }

    this.anyadirEtiquetas = function(...nuevasEtiquetas)
    {
        for(let i = 0; i < nuevasEtiquetas.length; i++)
        {
            if(this.etiquetas.includes(nuevasEtiquetas[i]) === false)
            {
                this.etiquetas.push(nuevasEtiquetas[i]);
            }
        }
    }
    
    this.borrarEtiquetas = function(...etiquetasABorrar)
    {
        for(let i = 0; i < etiquetasABorrar.length; i++)
        {
            let posicion = this.etiquetas.indexOf(etiquetasABorrar[i]);

            if (posicion !== -1)
            {
                this.etiquetas.splice(posicion,1)
            }
        }
    }
    if(etiquetas.length > 0)
    {
        this.anyadirEtiquetas(...etiquetas);
    }
}

//FUNDAMENTOS 2 

function listarGastos()
{
    return gastos;
}

function anyadirGasto(gasto)
{
    gasto.id = idGasto;

    idGasto++;

    gastos.push(gasto);
}

function borrarGasto(id)
{
    for(let i = 0; i < gastos.length; i++)
    {
        if(gastos[i].id === id)
        {
            gastos.splice(i,1);
            break;
        }
    }
}

function calcularTotalGastos()
{
    let suma = 0;
    for(let i = 0; i < gastos.length; i++)
    {
        
        suma += gastos[i].valor;
    }
    return suma;
}

function calcularBalance()
{
    let balance = presupuesto - calcularTotalGastos();
    return balance;
    
}
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    listarGastos,
    CrearGasto,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    filtrarGastos,
    agruparGastos
}