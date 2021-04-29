var elizabeth = {
    name: 'Elizabeth',
    lastName: 'Curie',
    age: 24,
    weight: 65
}

console.log(`At the begining of the year ${elizabeth.name} weighted ${elizabeth.weight}kg`);

const GAIN = 0.2
const YEAR = 365

const gainWeight = person => person.weight += GAIN

const loseWeight = (person) => person.weight -= GAIN

for (var i = 1; i <= YEAR; i++) {
    var random = Math.random()
    if (random<0.25) {
        gainWeight(elizabeth)
    }else if(random<0.50){
        loseWeight(elizabeth)
    }else {

    }
}

console.log(`At the end of the year ${elizabeth.name} will weight ${elizabeth.weight.toFixed(1)}kg`);
