/*¿Cuántos años de diferencia tienes con tu hermano? 
Escribe un programa que muestre el mensaje 
¨Nuestra diferencia de edad es¨, 
concatenando el resultado de la diferencia de tu edad con
 la de tu hermano (o de un amigo). */
// SOLUCIÓN:



function mostrarArreglo(){
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    let text = "";
    for (let i = 0; i < cars.length; i++) {
      text += cars[i] + "<br>";
      document.write(text);
    }
} 

function calcularDiferencia(edad,edadHermano){
    //MATH.ABS CALCULA EL VALOR ABSOLUTO 
    resultado = Math.abs(edadHermano-edad);
    document.write("El resultado es:"+ resultado);
    }
    function sumarUno(x){
    for (let i = x ; i < 120 ; i++) {
      document.write(i+"<br>") ;
    }
    }
function mostrarDiferencia(){
    edadUno = 12
    edadDos = 34
     calcularDiferencia(edadUno,edadDos);
    
    edadTres = 22
    edadCuatro = 45
    
    calcularDiferencia(edadTres,edadCuatro); 
    document.getElementById("demo").innerHTML = text;
    edadUno = 12
    edadDos = 34
     calcularDiferencia(edadUno,edadDos);
}
    