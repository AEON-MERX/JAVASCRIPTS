
<script>
// CODIGO JAVASCRIPT AQUÍ
function promedioMatematicas(){
var matematicas =  0 ;
var notas = parseInt(prompt("Escribe la cantidad de notas a promediar de matemáticas"));
if(notas != 0)
for(i = 0; i< notas; i++){
var nota = parseInt(prompt("Escribe la nota de matemáticas"));
matematicas = matematicas + nota;
}
console.log("La suma de las notas de matematicas es:", matematicas);
console.log("El promedio de las notas de matemáticas es:", matematicas/notas);
}
function promedioEspanol(){
var espanol = 0;
var notasEspanol = parseInt(prompt("escribe la cantidad de notas de español a promediar"));
if(notasEspanol != 0)
var contador  = 0;
while(contador< notasEspanol){
var notaEspanol = parseInt(prompt("Escribe la nota de espanol"));
espanol = espanol + notaEspanol;
contador++;
} 
console.log("La suma de las notas de espanol es:", espanol);
console.log("El promedio de las notas de espanol es:" ,espanol/notasEspanol);
}
function promedioIngles(){
var ingles = 0;
var notasIngles = parseInt(prompt("Escribe la cantidad de notas de ingles a promediar"));
if(notasIngles != 0)
var cont = 0;
do{
var notaIngles = parseInt(prompt("Escribe la nota de inglés"));
ingles = ingles + notaIngles;
cont++;
}
while(cont< notasIngles);
console.log("La suma de las notas de inglés es", ingles);
console.log("El promedio de las notas de ingles es:", ingles/notasIngles);
}
var materia = prompt("Escribe la materia que quieres evaluar");
switch(materia){
case 'Ingles':
promedioIngles();
break;
case 'Matematicas':
promedioMatematicas();
break;
case 'Espanol':
promedioEspanol();
break;
}
</script>

