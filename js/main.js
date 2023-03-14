let total = 0;

// FUNCIÓN PARA PEDIR DATOS DEL CLIENTE
function datosDeCliente(){
    let nombre = prompt('Ingrese su nombre: ');
    let apellido = prompt('Ingrese su apellido: ');
    return (nombre + ' ' + apellido);
}

// FUNCIÓN PARA EJECUTAR COMPRA DE SERVICIOS
function compraDeServicios(cliente){
    let servicioAElegir = true;
    while (servicioAElegir) {
        let servicioSeleccionado = parseInt(prompt('Hola '+ cliente +', por favor elija una de los siguientes servicios: \n1)Show Infantil \n2)Decoración de Globos,\n3) Decoración Matrimonial,\n4) Show y Decoración de Globos'));
        switch (servicioSeleccionado) {
            case 1:
                total = total + 900;
				break;
            case 2:
                total = total + 400;
				break;
            case 3:
                total = total + 500;
				break;
            case 4:
                total = total + 1200;
				break;
            default:
                alert('Error en la elección de servicio.');
				continue;
        }
        alert('Gracias, hasta ahora el monto total por el servicio es de: $/'+ total);
       
        let cpp = true;
		while (cpp) {
			let cantidadDeCuotas = parseInt(prompt('¿En cuántas cuotas sin intereses deseas pagarlo?\n1) 1 cuotas\n2) 2 cuotas \n3) 3 cuotas \n4) 5 cuotas \n5)7 cuotas'));
			switch (cantidadDeCuotas) {
				// El toFixed me sirve para la cantidad de decimales que se van a mostrar, en este caso son 2
				case 1:
					totalCuotas = total / 1;
					alert ('Su pago será 1 cuota de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				case 2:
					totalCuotas = total / 2;
					alert ('Su pago serán 2 cuotas de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				case 3:
					totalCuotas = total / 3;
					alert ('Su pago serán 3 cuotas de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				case 4:
					totalCuotas = total / 5;
					alert ('Su pago serán 5 cuotas de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				case 5:
					totalCuotas = total / 7;
					alert ('Su pago serán 7 cuotas de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				default:
					alert('Cantidad de cuotas ingresada incorrecta')
					break;
			}
		}



        let seleccionContinuarCompra = parseInt(prompt('¿Desea contratar algún otro servicio?\n1) Sí \n2) No'));
        if (seleccionContinuarCompra === 1) {
            servicioAElegir = true
        }else{
            break
        }
    }

    class Evento {
        constructor(fecha, lugar,dni,numeroTelefonico) {
            this.fecha = fecha
            this.lugar = lugar
            this.dni = dni
            this.numeroTelefonico = numeroTelefonico
        }
      }
    const arrayEventos = []; // Creamos un array vacío
    let cantidad = parseInt(prompt("¿De cuántos eventos ingresarás datos?"));
  
    for (let i = 0 ; i < cantidad; i++) {
        let fechaNueva = prompt(`Ingrese la fecha del evento ${i + 1}: `)
        let nuevoLugar = prompt(`Ingrese el lugar donde será el evento ${i + 1}: `)
        let nuevoDni = parseInt(prompt(`Ingrese su DNI para el evento ${i + 1}: `))
        let nuevoNumeroTelefonico = parseInt(prompt(`Ingrese un número de celular para el evento ${i + 1}: `))
        const eventoNuevo = new Evento(fechaNueva, nuevoLugar, nuevoDni,nuevoNumeroTelefonico);
        arrayEventos.push(eventoNuevo); // Agregamos el objeto al array utilizando el método push
    }
    preguntaDni = parseInt(prompt('Antes de finalizar, ¿Desea consultar por los datos de un evento? Tendría que colocar el DNI ingresado para ese evento: \n1) Sí \n2) No'))
    if (preguntaDni === 1) {
        let dniBuscado;
        let eventoEncontrado = null;

        while (!eventoEncontrado) {
            dniBuscado = parseInt(prompt("Ingrese el DNI a buscar: "));
            eventoEncontrado = arrayEventos.find((evento) => evento.dni === dniBuscado);

            if (!eventoEncontrado) {
                alert("No se encontró ningún evento con ese DNI");
                let respuesta = prompt("¿Desea ingresar un nuevo DNI? \n1)Sí\n2)No").toUpperCase();
                if (respuesta !== "1") {
                break;
                }
            }
        }

        if (eventoEncontrado) {
        alert(`Se encontró el evento con fecha ${eventoEncontrado.fecha} y lugar ${eventoEncontrado.lugar}`);
        }
    }
    console.log(arrayEventos);
    let mostrarMontoTotalyDatos = ('Gracias por tu preferencia ' + cliente + ', usted ha gastado $/' + total);
    return mostrarMontoTotalyDatos;
    
}

window.addEventListener('load',function(){
    let cliente = datosDeCliente();
    alert(compraDeServicios(cliente));
})

