// Importar las librerías
const moment = require('moment');
const axios = require('axios');
const fs = require('fs');

// Ejemplos de uso de las librerías

// Usando moment para manejar fechas y horas
const fechaActual = moment();
console.log('Fecha y hora actual:', fechaActual.format('YYYY-MM-DD HH:mm:ss'));

// Usando axios para hacer una solicitud HTTP
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Título del artículo:', response.data.title);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud HTTP:', error.message);
  });

// Usando fs para leer y escribir archivos
const contenido = 'Este es el contenido que se escribirá en el archivo.';
fs.writeFileSync('archivo.txt', contenido);
const contenidoLeido = fs.readFileSync('archivo.txt', 'utf8');
console.log('Contenido del archivo:', contenidoLeido);
