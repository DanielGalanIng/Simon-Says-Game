var lisa = {
    name: 'Lisa',
    lastName: 'Curie',
    age: 24,
    books: 112
}

var marie = {
    name: 'Marie',
    age: 24,
    lastName: 'Curie',
    books: 67
}

var neil = {
    name: 'Neil',
    age: 14,
    lastName: 'Tyson',
    books: 32
}

var elsie = {
    name: 'Elsie',
    age: 12,
    lastName: 'Hewitt',
    books: 89
}

var daniel = {
    name: 'Daniel',
    age: 18,
    lastName: 'Galán',
    books: 54
}

var elizabeth = {
    name: 'Elizabeth',
    age: 30,
    lastName: 'Olsen',
    books: 78
}

var people = [lisa, daniel, neil, elizabeth, elsie, marie]

//Cuenta de libros

// var acum = 0

// for (let i = 0; i < people.length; i++) {
//     acum = acum + people[i].books
// }

const reducer = (acum, {books}) => acum + books

var totalBooks = people.reduce(reducer, 0)

console.log(`We have ${totalBooks} books`);
