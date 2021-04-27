var name = 'Elizabeth', age = 24, lastName = 'Curie';

function printAge(n, a, ln) {
    console.log(`${n} ${ln} tiene ${a} años`);
}

printAge('Lisa', 26, 'Curie');
printAge('Sasha', 34, 'Marie');

//Objetos
// Son características que tiene algo en común, se representa dentro de un {...}, po llaves o keys seguido de un valor o value

var daniel = {
    nombre: 'Daniel',
    lastName: 'Galán',
    age: 24
}
var elizabeth = {
    nombre: 'Elizabeth',
    lastName: 'Curie',
    age: 19
}

//Acceder al las propiedades de un objeto

function printAge({nombre}) {
    console.log(nombre.toUpperCase())
}

printAge(daniel)
printAge(elizabeth)
printAge({nombre: 'Lisa'})

//desestructurar objetos

var daniel = {
    nombre: 'Daniel',
    lastName: 'Galán',
    age: 24
}
var elizabeth = {
    nombre: 'Elizabeth',
    lastName: 'Curie',
    age: 19
}

//Acceder al las propiedades de un objeto

function printAge(person) {
    // var nombre = person.nombre
    var {nombre} = person;
    console.log(nombre.toUpperCase());
}

printAge(daniel)
printAge(elizabeth)

var elizabeth = {
    name: 'Elizabeth',
    lastName: 'Curie',
    age: 24
}

var lisa = {
    name: 'Lisa',
    lastName: 'Galán',
    age: 20
}

function printFullNameLastname(person) {
    var {name, lastName, age} = person 
    console.log(`Hola, me llamo ${name} ${lastName} y tengo ${age} años`);
}

printFullNameLastname(lisa);
printFullNameLastname(elizabeth);

//Objeto modificando parámetros

function bithday(person) {
    return {
        ...person,
        age: person.age + 1 
    }
}

bithday(elizabeth)
bithday(lisa)