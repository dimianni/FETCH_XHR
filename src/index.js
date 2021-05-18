
console.log('One');

const requestLink = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json'; // Solution 1
        xhr.addEventListener('load', function () {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response); // string
                // console.log(JSON.parse(xhr.response)); // Solution 2
            }
        })

        xhr.addEventListener('error', function () {
            reject(xhr.response);
        })

        xhr.send()
    })

}

sendRequest('GET', requestLink)
    // 'data' comes from resolve
    .then(data => {
        data.modified = true
        console.log(data)
    })
    .catch(err => console.log(err))

    
console.log('Two');


