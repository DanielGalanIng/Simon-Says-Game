var lisa = {
    name: 'Lisa',
    lastName: 'Curie',
    age: 24
}

var marie = {
    name: 'Marie',
    age: 24,
    lastName: 'Curie'
}

var neil = {
    name: 'Neil',
    age: 14,
    lastName: 'Tyson'
}

var elsie = {
    name: 'Elsie',
    age: 12,
    lastName: 'Hewitt'
}

var daniel = {
    name: 'Daniel',
    age: 18,
    lastName: 'Galán'
}

var elizabeth = {
    name: 'Elizabeth',
    age: 30,
    lastName: 'Olsen'
}

const older = person => person.age > 20 
const younger = person => person.age <=20

var people = [lisa, daniel, neil, elizabeth, elsie, marie]

//Filtrar las personas mayores

var olderPeople = people.filter(older)
var youngerPeople = people.filter(younger)

console.log(olderPeople);
console.log(youngerPeople);