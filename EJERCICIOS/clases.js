
function mostrar() {
    class Person {
        constructor(age,name) {
            this.age = age;
            this.name = name;
        }
    }
    
let genesis = new Person(24,'Sandra')
    document.write(genesis.age);
    document.write(genesis);
    document.write(genesis.name);
    console.log(genesis.name);
}