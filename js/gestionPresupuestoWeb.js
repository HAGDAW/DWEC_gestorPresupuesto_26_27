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

    caja.innerHTML = `<div class="gasto">
            <div class="gasto-descripcion">${gasto.descripcion}</div>
            <div class="gasto-fecha">${gasto.fecha}</div> 
            <div class="gasto-valor">${gasto.valor}</div> 
            <div class="gasto-etiquetas">
                ${etiquetas}
            </div> 
        </div>
    `;
}

function mostrarGastosAgrupadosWeb(){
    
}

export{
    mostrarDatoEnId,
    mostrarGastoWeb,    
    mostrarGastosAgrupadosWeb
}