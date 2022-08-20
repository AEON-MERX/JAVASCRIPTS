function saltarLinea() {
    document.write('<br> <br> <br>');
}
function imprimir(frase) {
    document.write(frase);
    saltarLinea();

}

function mostrar() {
    class Person {
        constructor(age,name) {
            this.age = age;
            this.name = name;
        }
    }
    class Car {
        constructor(model,price) {
            this.model = model;
            this.price = price;
        }
    }
    
let personaUno = new Person(24,'Sandra')
     document.write(personaUno);
    document.write(personaUno.age);
    saltarLinea();
    document.write(personaUno.name);
    saltarLinea();
    console.log(personaUno);

let carroUno = new Car('Ferrari',60000)
     document.write(carroUno);
    saltarLinea();

    document.write(carroUno.model);
    saltarLinea();

    document.write(carroUno.price);
    console.log(carroUno);

}
