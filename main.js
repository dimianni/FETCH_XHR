

function init() {

    const apiURL = 'https://rickandmortyapi.com/api/character/',
        container = document.querySelector('.characters')

    function getCharacters(url, callback) {
        return fetch(url)
            .then(res => res.json())
            .then(data => callback(data.results))
    }

    function output(arr) {
        arr.forEach(char => {
            const element = document.createElement('img');
            console.log(element);
            element.src = char.image;

            container.appendChild(element)

        });
    }

    getCharacters(apiURL, output)

}

init()