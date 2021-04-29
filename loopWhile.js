var elizabeth = {
    name: 'Elizabeth',
    lastName: 'Curie',
    age: 24,
    weight: 65
}

console.log(`At the begining of the year ${elizabeth.name} weighted ${elizabeth.weight}kg`);

const GAIN = 0.3
const YEAR = 365
var days = 0

const gainWeight = person => person.weight += GAIN
const loseWeight = (person) => person.weight -= GAIN
const eatLot = () => Math.random() < 0.3
const workOut = () => Math.random() < 0.4


const GOAL = elizabeth.weight - 3

while (elizabeth.weight > GOAL) {
    if (eatLot()) {
        gainWeight(elizabeth)
    }
    if (workOut()) {
        loseWeight(elizabeth)
    }
    days += 1
}

console.log(`It took ${days} days for ${elizabeth.name} to lose 3Kgs`);

console.log(`At the end of the year ${elizabeth.name} will weight ${elizabeth.weight.toFixed(1)}kg`);