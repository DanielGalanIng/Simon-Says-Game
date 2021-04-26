console.log('Hello World JS!');

//Declarar una variable con var o let o const y un string se usa "" o ''

var name = 'Elizabeth', lastName = 'Galán'
var age = '24 años';

//Concatenar texto

console.log('Hola ' + name + ' ' + lastName);
console.log('Tengo ' + age + ' años');

var weight = 75;


console.log(`Hola ${name} ${lastName}`);//Utlizando estas comillas ``y ${}

//Manejar Variables: String

var name = 'Elizabeth', lastName = 'Galán'

var nameUppercase = name.toUpperCase(); //String en mayúsculas

var lastNameLowercase = lastName.toLowerCase(); //String en minúsculas

var firstCharacter = name.charAt(0); //saber la posición de la letra en el string que queremos saber.

var nameLength = name.length; //Cantidad de caracteres que tiene el string, este es un atributo por lo que no se coloca ()

var completeName = name + ' ' + lastName // Concatenar Strings

//Interpolación de texto o varibales con ``y ${}

var completeName1 = `${name} ${lastName.toUpperCase()}`

//Acceder a un string dentro de sub-string

var str = name.charAt(1) + name.charAt(2); //li

var str1 = name.substr(1, 4); // EL caracter desde el que comienza y cuantos va a mostrar

var lastCharacter = name.charAt(name.length - 1); //Mostrar la ultima letra de la variable name.

// Variables: Números

var age = 24;

age = age + 1; //Incremento se usa +

age += 1 // También incrementa la variable en 1 en este caso

var weight = 60; // Decremento se usa -

weight -= 2; //También decrementa la variable en 1 en este caso

//Sumar dos números

var sandwich = 5;

weight =weight+sandwich;

var playFootball = 3;

weight -= playFootball;

//Ejemplo de decimales

var winePrice = 200.3;

var total = winePrice * 3 //Multiplicación se usa * 

//En js la manera de almacenar decimales no es tan precisa, ya que js destina cierta cantidad de bytes de la memoria RAM para asignar un número decimal.

//EL módulo de matemáticas MAth para hacer cálculos más precisos

var total = Math.round(winePrice * 3); //Redondear sin decimales
var totalStr = total.toFixed(2) // Dos decimales después de la coma
var total2 = parseFloat(totalStr) //Tranforma el String a un número

//División

var pizza = 8;
var people = 3;
var partsPerPerson = pizza / people;

