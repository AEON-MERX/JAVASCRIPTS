// Importar las librerías
const _ = require('lodash');
const moment = require('moment');
const faker = require('faker');

// Ejemplos de uso de las librerías

// Usando lodash para realizar operaciones de manipulación de datos
const listaNumeros = [1, 2, 3, 4, 5];
const sumaNumeros = _.sum(listaNumeros);
console.log('Suma de números usando lodash:', sumaNumeros);

// Usando moment para manejar fechas y horas
const fechaActual = moment();
console.log('Fecha y hora actual:', fechaActual.format('YYYY-MM-DD HH:mm:ss'));

// Usando faker para generar datos simulados
const nombreFicticio = faker.name.findName();
const direccionFicticia = faker.address.streetAddress();
console.log('Nombre ficticio:', nombreFicticio);
console.log('Dirección ficticia:', direccionFicticia);
