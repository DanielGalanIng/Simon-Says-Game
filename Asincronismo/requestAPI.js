const URL='swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

const onPeopleResponse = function (person) {
    console.log(`Hi my name is ${person.name}`);
}

function getCharacter(id) {
    const url = `${URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, onPeopleResponse)
}

getCharacter(1)
getCharacter(2)
getCharacter(3)
getCharacter(4)

