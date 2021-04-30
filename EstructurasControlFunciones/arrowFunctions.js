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

const adult = ({age}) => age > ADULT_HOOD

function printAdult(person) {
    if (adult(person)) {
        console.log(`${person.name} es mayor de edad y tiene ${person.age} años`)
    }else{
        console.log(`${person.name} es menor de edad y tiene ${person.age} años`)
    }
}

function allowAccess(person) {
    if (!adult(person)) {
        console.log('Access Denied');
    }else{
        console.log('Allow Granted');
    }
}

// printAdult(elizabeth);
printAdult(lisa);
allowAccess(lisa)
printAdult(marie);
allowAccess(marie)
printAdult(neil);
allowAccess(neil)
printAdult(elsie);
allowAccess(elsie)
printAdult(daniel);
allowAccess(daniel)