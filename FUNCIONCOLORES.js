FUNCION ALEATORIA MENU
DE COLORES

function cambiarcolor(){
  let x = document.getElementById('botonnav');
  console.log(x);
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
 
 
    color += letters[Math.floor(Math.random() * 16)];
    x.style.backgroundColor = color ;
  }
  console.log(color);
 
}