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

for (var i = 0; i <= people.length; i++) {
    var people = people[i]
    console.log(`${people.name} ${people.lastName} is ${people.age} years old`);
}