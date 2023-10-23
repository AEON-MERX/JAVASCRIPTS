// Importar las librerías
const fs = require('fs-extra');
const chalk = require('chalk');
const inquirer = require('inquirer');

// Ejemplos de uso de las librerías

// Usando fs-extra para operaciones avanzadas de sistema de archivos
fs.ensureDirSync('mi_directorio');
fs.writeFileSync('mi_directorio/archivo.txt', 'Contenido del archivo.');

// Usando chalk para colorear la salida de la consola
console.log(chalk.green('Este texto es verde.'));
console.log(chalk.blue('Este texto es azul.'));
console.log(chalk.red('Este texto es rojo.'));

// Usando inquirer para crear una interfaz de línea de comandos interactiva
inquirer.prompt([
  {
    type: 'input',
    name: 'nombre',
    message: '¿Cuál es tu nombre?'
  }
])
.then(respuestas => {
  console.log('Hola, ' + respuestas.nombre + '!');
});
