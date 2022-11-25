//let radio = 96;
//console.log("El radio del circulo es",radio);
//const pi = Math.PI ;
// AREA DEL CIRCULO
//let areaCirculo = pi*(radio*radio);
//console.log("El area del circulo es", areaCirculo);
// ESTADISTICA
//MODA MEDIANA Y LA MEDIA
//MODA ES EL DATO QUE MAS SE REPITE
const edades = [
    10,
    20,
    30,
    10,
    20,
    30,
    40,
    20,
    20,
    20,
    10,
    60,
  ];
  
  const edadesContador = {};
console.log(edades);
   console.log(edadesContador);
  edades.map(
    function (elemento) {
      if (edadesContador[elemento]) {
        edadesContador[elemento] += 1;
      } else {
        edadesContador[elemento] = 1;
      }
    }
  );
console.log(edadesContador);
  const listaEdades = Object.entries(edadesContador).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = listaEdades[listaEdades.length - 1];
  console.log("El dato que màs se repite es:", moda);
console.log(listaEdades);
// MEDIA O TAMBIÈN LLAMADA PROMEDIO
//LA SUMA DE LOS DATOS DIVIDIDO EN EL NÙMERO DE DATOS
//let notasColegio = [50,50,40,60,70,80,90]
//let sumaNotas = 0;
//for(i= 0;i<notasColegio.length;i++){
//sumaNotas +=   notasColegio[i];
//}
//console.log("La suma de las notas es",sumaNotas);
//console.log("El numero de notas es:", notasColegio.length);
//console.log("La media estadìstica de las notas es:", sumaNotas/notasColegio.length );
//MEDIANA PARTE UNA DISTRIBUCIÒN EN DOS PARTES IGUALES
//let   numeros = [0,2,4,6,8,9,11,13,15,18,19];
//console.log("Tengo",numeros.length,"numeros");
//let n = numeros.length;
//console.log("La mediana es",(n+1)/2);

