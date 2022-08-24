
 // FUNCIONES O MÉTODOS DE JAVASCRIPT MAIN.HTML//  
 // 01 DIBUJAR LINEA
   function dibujarLinea(){
      document.write('<hr style="background-image:linear-gradient(to left,blue,yellow,orangered); height: 80px;"></hr>');
    }
//---------------------------------------------------------------------------------------------------------------//
 // 02 RECIBIR DATOS
    function recibirDatos(dato){
        dato =  prompt(dato);
         document.write('La información recibida y guardada en variable datos es: ' + dato)
         document.write('El tipo de dato usado es: '+ typeof dato);
        }
//---------------------------------------------------------------------------------------------------------------//
 // 03 SALTAR LINEA
      function saltarLinea() {
         document.write('<br> <br> <br>');
     }
//---------------------------------------------------------------------------------------------------------------//
 // 04 IMPRIMIR
     function imprimir(frase) {
         document.write(frase);
         saltarLinea();
     }
 //---------------------------------------------------------------------------------------------------------------//
  // 05 CALCULAR IMC
     function calcularImc (peso,altura){
         return(peso/(altura*altura));
     }
//---------------------------------------------------------------------------------------------------------------//
 // 01 DIBUJAR LINEA
     function calcularImcDosPersonas(){
        imprimir("El promedio del imc calculado de Ana y Gabriela es :"+ (calcularImc(65,1.73)+calcularImc(78,1.65))/2);
     }
//---------------------------------------------------------------------------------------------------------------//
 // 06 HALLAR RESULTADO
     function hallarResultado(){
        var nombre = prompt("Cual es tu nombre?");
         var peso  = prompt(nombre+"  Informe su peso en kg");
         //console.log("El peso guardado es: "+ peso);
         var altura = prompt("Informe su altura, ejemplo 1.78");
         //console.log("La altura guardada es: "+ altura);
         imcCalculado = calcularImc(peso,altura);
         //console.log("El imc calculado es: "+ imcCalculado)
         imprimir('<h1>El imc calculado es  </h1>: '+ imcCalculado);
         if(imcCalculado<=15){
            imprimir('Tu estado es delgadez severa');
         }
         else if(imcCalculado>=15 && imcCalculado <=15.9){
            imprimir('Tu estado es delgadez leve');
         }
         else if(imcCalculado>=16 && imcCalculado <=18.4){
            imprimir('Tu estado es delgadez');
         }
         else if(imcCalculado>=18.5 && imcCalculado <=24.9){
            imprimir('Tu estado es saludable');
         }
         else if(imcCalculado>=25 && imcCalculado <=29.9){
            imprimir('Tu estado es sobrepeso');
         }
         else if(imcCalculado>=30 && imcCalculado <=34.9){
            imprimir('Tu estado es obesidad moderada');
         }
        else  if(imcCalculado>=35 && imcCalculado <=39.9){
            imprimir('Tu estado es obesidad severa');
         }
        else  if(imcCalculado>= 40){
            imprimir('URGENTEEE! Tu estado es obesidad mórbida');
         }
        }
 //---------------------------------------------------------------------------------------------------------------//
  // 07 CALCULAR PUNTOS
     function calcularPuntos() {
         var cantidadVictorias = parseInt(prompt("Escribe número de victorias"));
         var cantidadEmpates = parseInt(prompt("escribe el número de empates"));
         var puntosTotales = "El total de puntos es:" + ((cantidadVictorias * 3) + cantidadEmpates);
         imprimir(puntosTotales);
       }
 //---------------------------------------------------------------------------------------------------------------//
  // 08 CONDICIONALES
       function condicionales(puntosTotal){
        var  puntosTotal = parseInt(prompt(puntosTotal));
         if(puntosTotal>28){
             imprimir("El equipo esta mejor que el año pasado");
         }
         else if(puntosTotal == 28){
             imprimir("El equipo esta igual que el año pasado");
         }
         else if(puntosTotal <28 ){
             document.write("El equipo esta peor que el año pasado");
         }
         else{
             document.write("No se ingreso ningún parámetro");
         }
     
     
       }
 //---------------------------------------------------------------------------------------------------------------//
  // 09 SORTEO
       function sorteo(n) { 
         return Math.round(Math.random()*n);
     }   
//---------------------------------------------------------------------------------------------------------------//
 // 1O LOTERIA 
     function loteria(){
      var numeroPensado = sorteo(10);
      var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"))
     
      if (numeroPensado == numeroLanzado){
          imprimir("usted acertó");
      }
      else {
        if (numeroLanzado > numeroPensado){
              imprimir("usted erró, el número pensado era menor que tu número");
          } 
         else{
              imprimir("usted erró, el número pensado era mayor que tu número");
          }
      }
     }
//11  AÑO MUNDIAL FIFA

function añoMundial(){
    var añoMundial = 1930 ;
    var limite = parseInt(prompt('Ingrese el año limite para calcular los años de mundiales FIFA '))
    while (añoMundial <= limite ){
        imprimir("Hubo mundial de la fifa en el año:" + añoMundial);
        añoMundial = añoMundial+4 ;
    }
    alert('Final del bucle while');
}
// 12 CICLO WHILE

function cicloWhile(){
    imprimir('WHILE');
    var multiplicador = 1;
    while(multiplicador <= 10 ){
    imprimir( 5 * multiplicador );
    multiplicador = multiplicador + 2 ;

    }
}
 // 13 CICLO FOR
function cicloFor(){
    imprimir('FOR');
    for(var multiplicador = 1 ; multiplicador <= 10 ; multiplicador++){
        imprimir( 5 * multiplicador );
    }

}

// 14 CALCULAR MEDIA DE LAS EDADES DE UNA FAMILIA
function calcularMedia(){

var numeroMiembros = parseInt(prompt("Ingrese el número de miembros de su familia"));
var contador = 1 ;
var totalEdades = 0;
while (contador<= numeroMiembros){
    edad = parseInt(prompt("Ingrese la edad del familiar"))
    totalEdades = totalEdades + edad ;
    contador++ ;
}

mediaEdades = totalEdades/numeroMiembros ;
imprimir('La media de las edades es: '+ mediaEdades);
imprimir('fin');


}
// 15 IMPRIMIR TODOS LOS NÚMEROS PARES DEL 1 AL 100 USANDO UN BUCLE
function numerosPares(){
    var contador = 2;
    while(contador <= 100) {
        imprimir(contador);
        contador = contador + 2; // incrementar de dos en dos
    }
    imprimir("FIN");
}


 


