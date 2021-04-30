var x = 4, y = '4'
x==y
x===y

//Objetos

var elizabeth = {
    nome: 'Elizabeth',
    lastName: 'Curie',
    age: 24
}

var lisa = {
    nome: 'Elizabeth',
    lastName: 'Curie',
    age: 24
}

elizabeth == lisa //False
elizabeth === lisa //False

var lisa = elizabeth // Cambiando la referencia

elizabeth == lisa //True
elizabeth === lisa //True

var lisa = { //Se esta creando un nuevo objeto, otro lugar en memoria RAM
    ...elizabeth
}