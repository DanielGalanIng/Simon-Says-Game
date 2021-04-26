//Funciones son pedasos de código reutlizables

var name = 'Elizabeth', age = 24, lastName = 'Curie';

function printAge(n, a, ln) {
    console.log(`${n} ${ln} tiene ${a} años`);
}
//function (Parametros) {Código} 

printAge();
printAge(name, age, lastName);
printAge('Lisa', 26, 'Curie');
printAge('Sasha', 34, 'Marie');

//  Si una función la creamos con parametros
//  Pero no se los enviamos, no va a salir error
//  Intentará imprimir pero pondrá undefined en los
//  parametros que no ingresemos. Esto debido a que js es debilmente tipado