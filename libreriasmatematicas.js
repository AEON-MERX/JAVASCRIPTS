// Importar las librerías
const math = require('mathjs');
const Fraction = require('fraction.js');
const Big = require('big.js');

// Ejemplos de uso de las librerías

// Usando mathjs para calcular la raíz cuadrada
const numeroMathjs = 16;
const raizCuadrada = math.sqrt(numeroMathjs);
console.log('Raíz cuadrada usando mathjs:', raizCuadrada.toString());

// Usando Fraction.js para trabajar con fracciones
const fraccion1 = new Fraction(1, 4);
const fraccion2 = new Fraction(1, 3);
const sumaFracciones = fraccion1.add(fraccion2);
console.log('Suma de fracciones usando Fraction.js:', sumaFracciones.toString());

// Usando Big.js para cálculos precisos con decimales
const numeroDecimal1 = new Big(0.1);
const numeroDecimal2 = new Big(0.2);
const sumaDecimales = numeroDecimal1.plus(numeroDecimal2);
console.log('Suma de decimales usando Big.js:', sumaDecimales.toString());
