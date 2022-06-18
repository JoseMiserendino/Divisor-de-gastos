let contadorPersonas = 0;
let total = 0;

function agregarPago(){
    let nombre = $("#nombre").val();
    let monto = parseFloat($("#monto").val());
    
    total += monto;
    contadorPersonas++;
    let textoAMostrar = `<div class="personas">${nombre + ":  $" + monto}</div>`;
    $("#pagadores").append(textoAMostrar);
    let textoTotal = `Total a pagar: $ ${total.toFixed(2)}`
    $("#total").text(textoTotal);
    let textoDividido = `A cada uno le toca pagar: $ ${(total / contadorPersonas).toFixed(2)}`
    $("#total_dividido").text(textoDividido);
}

$("#monto").keypress(function(event){
    if(event.which == 13){
        agregarPago();
    }
});
