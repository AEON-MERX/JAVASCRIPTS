// Esta función hace lo siguiente: CALCULA LA CONSTANTE MÁGICA DEL CUADRADO MÁGICO Q
  function Main() {
    
    var G = document.getElementById('G').textContent;
    var CM = parseInt(G)*3 ;
    var resultado = document.getElementById('resultado') ;
    resultado.innerHTML= "La constante mágica es: "+ CM;
    alert("Constante mágica es: "+CM)
    console.log("La constante mágica es igual a : "+CM);
}
// Esta función hace lo siguiente: SEGÚN EL CENTRO DEL CUADRADO MÁGICO QUE ELIGE EL USUARIO CREA EL CUADRADO MÁGICO COMPLETO
function inner(){
  A = document.getElementById('envio') ;
x= document.getElementById('envio').value;
console.log(x);
console.log ("EL valor de la constante mágica es:" + A.value*3);
console.log ("Sin errores") ;
console.log (A.textContent);
console.log(
"🛸🛸🦅🦅🦅🦅🦅🦅🦅🦅SOMOS AEON MERX 🦅🦅🦅🦅🦅🦅🦅🛸🛸"
);
let salida = document.getElementById('G').innerHTML=  parseInt(x) ;
let salidaDos = document.getElementById('uno').innerHTML=  parseInt(x) + (3) ;
let salidaTres = document.getElementById('dos').innerHTML=  parseInt(x) - (4) ;
let salidaCuatro = document.getElementById('tres').innerHTML=  parseInt(x) + (1) ;
let salidaCinco = document.getElementById('cuatro').innerHTML=  parseInt(x) - (2) ;
let salidaSeis = document.getElementById('seis').innerHTML=  parseInt(x) + (2) ;
let salidaSiete = document.getElementById('siete').innerHTML=  parseInt(x) - (1) ;
let salidaOcho = document.getElementById('ocho').innerHTML=  parseInt(x) + (4) ;
let salidaNueve = document.getElementById('nueve').innerHTML=  parseInt(x) - (3) ;
}
// Esta función hace lo siguiente: EL USUARIO INGRESA UN NÚMERO Y SE IMPRIME LA POSICION DE ESE NÚMERO DENTRO DE UN ARRAY DE DATOS
function operar() {
            
  let personas = []
personas[0]= 
[
nombre = 'andrea',
apellido = 'ramirez'
]

personas[1] = 
[
nombre = 'james',
apellido = 'rodriguez'
]

personas[2] = 
[
nombre = 'andrea',
apellido = 'rativa'
]

personas[3] = 
[
nombre = 'andrea',
apellido = 'rativa'
]

consulta = document.getElementById('rativa').value;
if (consulta <= personas.length-(1) ){
document.getElementById('hola').innerHTML="<table> <tr> <td> Apellido: " + personas[consulta][1]  + "</td>  </table>";
document.getElementById('hola2').innerHTML="<table> <tr> <td> Nombre: " + personas[consulta][0]  + "</td>  </table>";
document.getElementById('hola3').innerHTML="<table> <tr> <td> Array completo: " + personas[consulta]  + "</td>  </table>";
console.log(personas[1].length); 
console.log(personas);
personas.forEach(item => console.log(item));

}
else {
  alert('el numéro debe ser menor');
}
}

// FUNCION CAMBIAR CONTENIDO DE CELDA
function cambiarContenidoCelda() {
  // 1 ... 2...3
  let fila = parseInt(prompt('Digite el número de la fila:', 1));
  let columna = parseInt(prompt('Digite el número de la columna:', 1));

  if ((fila >= 1 && fila <= 3) && (columna >= 1 && columna <= 3)) {
      let celdas = document.getElementById('tblDatos').rows[fila - 1].cells;
      celdas[columna - 1].innerHTML = prompt('Digite un nuevo valor para la celda:');
  }
}
