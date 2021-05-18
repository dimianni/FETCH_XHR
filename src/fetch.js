const requestLink = 'https://jsonplaceholder.typicode.com/users';

/*-----------------------------------------------------------*/
/* NOTE: fetch is a Promise
-------------------------------------------------------------*/

// fetch(requestLink)
//     .then(res => res.json()) // without .json() -> ReadableStream
//     .then(data => console.log(data))
//     .catch(err => console.log("Errror!"))


/*-----------------------------------------------------------*/
/* GET
-------------------------------------------------------------*/


// body is null for GET
// function sendRequest(method, url, body = null) {

//     return fetch(url)

// }

// sendRequest('GET', requestLink)
//     // 'data' comes from resolve
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

/*-----------------------------------------------------------*/
/* POST
-------------------------------------------------------------*/

// const me = {
//     name: 'Dima',
//     age: 20
// }

// function sendRequest(method, url, body = null) {

//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: { "Content-Type": "application/json" } // double quotes!!!
//     })

// }

// sendRequest('POST', requestLink, me)
//     .then(response => response.json())
//     .then(data => console.log(data))

