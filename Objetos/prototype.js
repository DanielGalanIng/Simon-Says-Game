//Herencia
// function heritageFrom(prototypeSon, prototypeFather) {
//     var fn = function() {}
//     fn.prototype = prototypeFather.prototype
//     prototypeSon.prototype = new fn
//     prototypeSon.prototype.contructor = prototypeSon
// }

class Person {
    constructor(name, lastName, age) {
        this.name = name //objeto con el atributo de nombre
        this.lastName = lastName //Objeto con el atributo de apellido
        this.age = age
    }
    greet(){
        console.log(`Hi, my name is ${this.name} ${this.lastName}`);
    }
    older(){
        if (this.age < 17) {
            console.log(`${this.name} is younger, he o she is ${this.age}`);
        }else {
            console.log(`${this.name} is, he o she is ${this.age}`);
        }
    }
}


// function Person(name, lastName, age) {
//     this.name = name //objeto con el atributo de nombre
//     this.lastName = lastName //Objeto con el atributo de apellido
//     this.age = age
// }

// Person.prototype.greet = function () {
//     console.log(`Hi, my name is ${this.name} ${this.lastName}`);
// }

// Person.prototype.older = function () {
//     if (this.age < 17) {
//         console.log(`${this.name} is younger, he o she is ${this.age}`);
//     }else {
//         console.log(`${this.name} is, he o she is ${this.age}`);
//     }
// }

class Developer extends Person {
    constructor(name, lastName, age){ 
        super(name, lastName, age)
    }
    greet(){
        console.log(`Hi my name is ${this.name} ${this.lastName} and i'm a web developer`);
    }
}

// function Developer(name, lastName) {
//     this.name = name
//     this.lastName = lastName
// }
// // heritageFrom(Developer, Person)

// Developer.prototype.greet = function () {
//     console.log(`Hi my name is ${this.name} ${this.lastName} and i'm a web developer`);
// }



var lisa = new Person('Lisa', 'Curie', 24)
var elizabeth = new Person('Elizabeth', 'Olsen', 14)
var neil = new Developer('Neil', 'Tyson', 18)
var daniel = new Developer('Daniel', 'Galán', 24)
lisa.greet()
lisa.older()
elizabeth.greet()
elizabeth.older()
neil.greet()
neil.older()
daniel.greet();
daniel.older()