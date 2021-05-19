/*-----------------------------------------------------------*/
/* XHR, or XMLHttpRequest, is an object which is used to retrieve data from a server asynchronously.
-------------------------------------------------------------*/

const requestLink = 'https://jsonplaceholder.typicode.com/users';

// body is null for GET
function sendRequest(method, url, body = null) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.setRequestHeader("Content-Type", "application/json") // double quotes!!!

        xhr.addEventListener('load', function () {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(JSON.parse(xhr.response));
            }
        })

        xhr.addEventListener('error', function () {
            reject(xhr.response);
        })

        // xhr.send(body) // Request Payload returns [object Object] 

        xhr.send(JSON.stringify(body)) // Request Payload returns body; But Request Headers Content-Type is text/plain (because we converted body to string);
    })

}

/*-----------------------------------------------------------*/
/* POST
-------------------------------------------------------------*/

// const body = {
//     name: 'Dima',
//     age: 20
// }

// sendRequest('POST', requestLink, body)
//     .then(response => console.log(response)) 

/*-----------------------------------------------------------*/
/* GET
-------------------------------------------------------------*/

// sendRequest('GET', requestLink)
//     // 'data' comes from resolve
//     .then(data => {
//         data.modified = true
//         console.log(data)
//     })
//     .catch(err => console.log(err))




