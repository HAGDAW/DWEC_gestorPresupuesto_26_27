import * as logica from "./gestionPresupuesto.js";


function mostrarDatoEnId(idElemento, valor)
{
    let elemento = document.getElementById(idElemento);
    elemento.textContent = valor;
}

function mostrarGastoWeb(idElemento, gasto)
{
    let caja = document.getElementById(idElemento);
    let etiquetas = "";
    for (let i = 0; i < gasto.etiquetas.length; i++) 
        {
            etiquetas += `<span class="gasto-etiquetas-etiqueta">${gasto.etiquetas[i]}</span>`;
        }

    caja.innerHTML += `<div class="gasto">
            <div class="gasto-descripcion">${gasto.descripcion}</div>
            <div class="gasto-fecha">${gasto.fecha}</div> 
            <div class="gasto-valor">${gasto.valor}</div> 
            <div class="gasto-etiquetas">
                ${etiquetas}
            </div> 
        </div>
    `;
}

function mostrarGastosAgrupadosWeb(idElemento, agrup, periodo){
    
    let caja =  document.getElementById(idElemento);

    let entradas = Object.entries(agrup);
    let datoshtml = "";

    for(let i = 0; i < entradas.length; i++)
    {
        let clave = entradas[i][0];
        let valor = entradas[i][1];

        datoshtml+= `
        <div class="agrupacion-dato">
            <span class="agrupacion-dato-clave">${clave}</span>
            <span class="agrupacion-dato-valor">${valor}</span>
        </div>
        `;
    }

    

    caja.innerHTML=`
    <div class="agrupacion">
        <h1>Gastos agrupados por ${periodo}</h1>
        ${datoshtml}
        </div>
        `;
}

function repintar()
{
    mostrarDatoEnId("presupuesto",logica.mostrarPresupuesto())
    mostrarDatoEnId("gastos-totales", logica.calcularTotalGastos())
    mostrarDatoEnId("balance-total", logica.calcularBalance())

    let borrarElemento = document.getElementById("listado-gastos-completo")
    borrarElemento.innerHTML = "";

    let gastos = logica.listarGastos();

    for(let i = 0; i < gastos.length; i++)
    {
        mostrarGastoWeb("listado-gastos-completo",gastos[i])
    }

}

function actualizarPresupuestoWeb()
{
    let presupuestoSolicitado = prompt("Introduce el nuevo presupuesto: ");
    presupuestoSolicitado = Number(presupuestoSolicitado);
    logica.actualizarPresupuesto(presupuestoSolicitado);
    repintar();
}

let handler = document.getElementById("actualizarpresupuesto")
handler.addEventListener("click",actualizarPresupuestoWeb)

function nuevoGastoWeb()
{
    let descripcion = prompt("Introduce descripción: ")
    let valor = prompt("Introduce valor: ")
    valor = Number(valor);
    let fecha = prompt("Introduce fecha: ")
    let etiquetas = prompt("Introduce etiquetas: ")
    etiquetas = etiquetas.split(",")

    let gastoWeb = new logica.CrearGasto(descripcion,valor, fecha, ...etiquetas)
    logica.anyadirGasto(gastoWeb);
    repintar();
}
let handlerGastoWeb = document.getElementById("anyadirgasto")
handlerGastoWeb.addEventListener("click", nuevoGastoWeb)

function EditarHandle()
{
    this.handleEvent = function(evento)
    {
        let descripcion = prompt("Introduce descripción: ", this.gasto.descripcion)
        let valor = prompt("Introduce valor: ", this.gasto.valor)
        valor = Number(valor)
        let fecha = prompt("Introduce fecha: ",new Date(this.gasto.fecha).toISOString().slice(0,10))
        let etiquetas = prompt("Introduce etiquetas: ", this.gasto.etiquetas.join(","))
        etiquetas = etiquetas.split(",")

        this.gasto.actualizarDescripcion(descripcion);
        this.gasto.actualizarValor(valor);
        this.gasto.actualizarFecha(fecha);
        this.gasto.anyadirEtiquetas(...etiquetas);
    }
}

function BorrarHandle()
{
    this.handleEvent = function(event)
    {
        logica.borrarGasto(this.gasto.id)
        repintar();
    }
}

function BorrarEtiquetasHandle()
{
    this.handleEvent = function(event)
    {
        this.gasto.borrarEtiquetas(this.etiqueta)
        repintar();
    }
}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,    
    mostrarGastosAgrupadosWeb,
    repintar,
    actualizarPresupuestoWeb,
    nuevoGastoWeb,
}