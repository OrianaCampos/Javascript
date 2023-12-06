
//Hice un simulador de calculos en pagos en cuotas.... 
function calculo() {
let valorProducto = parseFloat (prompt ("Ingrese el valor del producto a comprar (sin el signo de $)"))

if (!isNaN(valorProducto)) {
    let cantidadDeCuotas = parseInt (prompt ("Quiere abonar $" + valorProducto + " en 1, 2, 3, 6 o 12 cuotas?"))

    let cuotaAPagar = valorProducto/cantidadDeCuotas

    while (cantidadDeCuotas) {

         if (cantidadDeCuotas == "1" || cantidadDeCuotas == "2" || cantidadDeCuotas == "3" || cantidadDeCuotas == "6" || cantidadDeCuotas == "12" ) {
         alert ("Perfecto, calculemos el valor a abonar en cada cuota")
         } else {alert ("No selecciono una cuota disponible")
            cantidadDeCuotas=false
            break }

        if (cantidadDeCuotas=="1"){alert ("Abonas " + cantidadDeCuotas + " pago de $ " + cuotaAPagar + " total.")
                                    break} 
          else {alert ("Abonas " + cantidadDeCuotas + " pagos de $ " + cuotaAPagar + " mensual.")
            break}
                         }
    }

else {alert ("No ingreso un numero")}

}

calculo()
let confirmacion = prompt ("Desea hacer otro calculo? (si/no)")
if (confirmacion=== "si") {calculo()}
else {alert ("Gracias por confiar!")}