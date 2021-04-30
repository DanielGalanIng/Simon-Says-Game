var elizabeth = {
    name: 'Elizabeth',
    lastName: 'Curie',
    age: 24,
    engineer: true,
    cooker: false,
    singer: false,
    dj: false,
    guitarPlayer: false,
    drone: true
}

function printCareer(person) {
    console.log(`${person.name} es:`);
    if (person.engineer===true) {
        console.log('Ingeniera');
    }else(
        console.log('No es Ingeniera')
    )
    if (person.cooker===true) {
        console.log('Cocinera');
    }
    if (person.singer===true) {
        console.log('Cantante');
    }
    if (person.dj===true) {
        console.log('djmario');
    }
    if (person.guitarPlayer===true) {
        console.log('Toca la Guitarra');
    }
    if (person.drone===true) {
        console.log('Voladora de Drones');
    }
}

printCareer(elizabeth);

var lisa = {
    name: 'Lisa',
    age: 24
}

var marie = {
    name: 'Marie',
    age: 24
}

var neil = {
    name: 'Neil',
    age: 14
}

var elsie = {
    name: 'Elsie',
    age: 12
}

var daniel = {
    name: 'Daniel',
    age: 18
}

const ADULT_HOOD = 18

function adult(person) {
    return person.age > ADULT_HOOD
}

function printAdult(person) {
    if (adult(person)) {
        console.log(`${person.name} es mayor de edad y tiene ${person.age} años`)
    }else{
        console.log(`${person.name} es menor de edad y tiene ${person.age} años`)
    }
}

printAdult(elizabeth);
printAdult(lisa);
printAdult(marie);
printAdult(neil);
printAdult(elsie);
printAdult(daniel);