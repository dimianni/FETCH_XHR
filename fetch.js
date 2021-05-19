/*-----------------------------------------------------------*/
/* GET
-------------------------------------------------------------*/
// NOTE: fetch is a Promise

const rickMortyUrl = 'https://rickandmortyapi.com/api/character/';

/*-----------------------------------------------------------*/
/* Using a callback to output fetched data:
-------------------------------------------------------------*/

fetch(rickMortyUrl)
    .then(response => response.json())
    .then(characters => {
        console.log(characters);
        showCharacters(characters.results)
    })
    .catch(error => console.log("Error!", error))


showCharacters = characters => {
    const charactersDiv = document.getElementById('rickMortyCharacters');
    characters.forEach(character => {
        const characterElement = document.createElement('p');
        characterElement.innerText = `Character Name: ${character.name}`;
        charactersDiv.append(characterElement);
    });
}


/*-----------------------------------------------------------*/
/* Using a Async/await to output fetched data:
-------------------------------------------------------------*/

async function showCharacters2() {
    let response = await fetch(rickMortyUrl)
    let data = await response.json()
    let characters = data.results;
    
    showCharacters(characters)
}
// showCharacters2();



/*-----------------------------------------------------------*/
/* POST
-------------------------------------------------------------*/

const me = {
    name: 'Dima',
    age: 20
}

function sendRequest(method, url, body) {

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" } // double quotes!!!
    })

}

sendRequest('POST', 'https://jsonplaceholder.typicode.com/users', me)
    .then(response => response.json())
    .then(data => console.log(data))





