var counter = 0

const rain = () => Math.random() < 0.25
do {
    counter++
} while (!rain());

const frecuency = counter === 1 ?
 'time':
 'times';
console.log(`it rained ${counter} ${frecuency}`);

