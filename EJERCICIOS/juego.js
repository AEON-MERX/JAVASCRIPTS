function saltarLinea() {
    document.write('<br> <br> <br>');
}
function imprimir(frase) {
    document.write(frase);
    saltarLinea();

}

function adivinarNumero(){
    var numeroPensado = Math.round(Math.random()*10);
    var numeroLanzado = parseInt(prompt('Ingrese un número entre 0 y 10'));
    if (numeroLanzado == numeroPensado){
    imprimir('Usted acertó');
    }
    if (numeroPensado != numeroLanzado){
    imprimir('Fallaste, el nùmero pensado era:'+ numeroPensado);
    }
}
function licenciaConduccion(){
    var edad = parseInt(prompt("¿Cuál es tu edad?"));
    var tieneLicencia = prompt("¿Tienes licencia? Responde S o N");
    // USANDO AND EN LA CONDICIONAL PARA NO CREAR DOS
    /*
    if(edad >= 18) {
        if(tieneLicencia == "S") {
            imprimir("Puedes conducir");
        }
    }
    */
    if((edad >= 18)&&(tieneLicencia == 'S')) {
            imprimir("Puedes conducir");
    }
    /* OTRA ALTERNATIVA AL ELSE
     if(edad < 18) {
        imprimir("No puedes conducir");
    }
    */
    else {
        imprimir("No puedes conducir");
    }
}


