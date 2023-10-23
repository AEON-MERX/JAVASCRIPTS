// Ejemplo 1: Función flecha sin argumentos
const saludar = () => {
  console.log('¡Hola, mundo!');
};
saludar();

// Ejemplo 2: Función flecha con un argumento
const cuadrado = (numero) => {
  return numero * numero;
};
console.log('El cuadrado de 5 es:', cuadrado(5));

// Ejemplo 3: Función flecha con retorno implícito
const duplicar = (numero) => numero * 2;
console.log('El doble de 7 es:', duplicar(7));

// Ejemplo 4: Función flecha con múltiples argumentos
const sumar = (a, b) => a + b;
console.log('La suma de 3 y 4 es:', sumar(3, 4));

// Ejemplo 5: Función flecha en un contexto de objeto
const persona = {
  nombre: 'Juan',
  saludar: () => {
    console.log(`Hola, soy ${this.nombre}`);
  }
};
persona.saludar();
// Ejemplo 1: Función flecha con un argumento y retorno implícito
const doble = numero => numero * 2;
console.log('El doble de 8 es:', doble(8));

// Ejemplo 2: Función flecha con desestructuración de objetos
const obtenerNombreCompleto = ({ nombre, apellido }) => `${nombre} ${apellido}`;
const persona = { nombre: 'Juan', apellido: 'Pérez' };
console.log('Nombre completo:', obtenerNombreCompleto(persona));

// Ejemplo 3: Función flecha como argumento en métodos de array
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(numero => numero * numero);
console.log('Cuadrados de los números:', cuadrados);

// Ejemplo 4: Función flecha como callback en una promesa
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promesa resuelta');
  }, 2000);
});

promesa.then(resultado => {
  console.log('Resultado de la promesa:', resultado);
});

// Ejemplo 5: Función flecha en un contexto de objeto
const coche = {
  marca: 'Toyota',
  modelo: 'Camry',
  obtenerInfo: function() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
  }
};

console.log(coche.obtenerInfo());
