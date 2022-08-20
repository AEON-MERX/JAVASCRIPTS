
    function recibirDatos(dato){
        dato =  prompt(dato);
         document.write('La información recibida y guardada en variable datos es: ' + dato)
         document.write('El tipo de dato usado es: '+ typeof dato);
        }
      function saltarLinea() {
         document.write('<br> <br> <br>');
     }
     function imprimir(frase) {
         document.write(frase);
         saltarLinea();
     
     }
     function calcularImc (peso,altura){
         return(peso/(altura*altura));
     }
     function calcularImcDosPersonas(){
        imprimir("El promedio del imc calculado de Ana y Gabriela es :"+ (calcularImc(65,1.73)+calcularImc(78,1.65))/2);
     }
    
     
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
         
     function calcularPuntos() {
         var cantidadVictorias = parseInt(prompt("Escribe número de victorias"));
         var cantidadEmpates = parseInt(prompt("escribe el número de empates"));
         var puntosTotales = "El total de puntos es:"+ cantidadVictorias * 3 + cantidadEmpates;
         imprimir(puntosTotales);
       }
     
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
 
