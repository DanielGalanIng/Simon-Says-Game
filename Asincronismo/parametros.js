class Person {
    constructor(name, lastName, age) {
        this.name = name //objeto con el atributo de nombre
        this.lastName = lastName //Objeto con el atributo de apellido
        this.age = age
    }
    greet(fn){
        console.log(`Hi, my name is ${this.name} ${this.lastName}`);
        if (fn) {
            fn(this.name,this.lastName)
        }
    }
    older(){
        if (this.age < 17) {
            console.log(`${this.name} is younger, he o she is ${this.age}`);
        }else {
            console.log(`${this.name} is older, he o she is ${this.age}`);
        }
    }
}

//Sub clases con extends
class Developer extends Person {
    constructor(name, lastName, age){ 
        super(name, lastName, age)
    }
    greet(fn){
        console.log(`Hi my name is ${this.name} ${this.lastName} and i'm a web developer`);
        if (fn) {
            fn(this.name, this.lastName, true)
        }
    }
}

//Función para devolver el saludo dependiendo si es dev o no usando un booleano

function greetRespond (name, lastName, itsDev) {
    console.log(`Hi! have a good day ${name} ${lastName}`);
    if (itsDev) {
        console.log(`OHh! didn't know you are a developer`);
    }
}

var lisa = new Person('Lisa', 'Curie', 24)
var elizabeth = new Person('Elizabeth', 'Olsen', 14)
var neil = new Developer('Neil', 'Tyson', 18)
var daniel = new Developer('Daniel', 'Galán', 24)
lisa.greet(greetRespond)
lisa.older()
elizabeth.greet(greetRespond)
elizabeth.older()
neil.greet(greetRespond)
neil.older()
daniel.greet(greetRespond);
daniel.older()