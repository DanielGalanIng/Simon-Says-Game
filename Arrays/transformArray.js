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

var people = [lisa, daniel, neil, elizabeth, elsie, marie]

const daysLiving = person => ({
        ...person,
        age: person.age * 365
    })
var peopleDays = people.map(daysLiving)

console.table(peopleDays);
console.table(people);
