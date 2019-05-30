const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');



app.appendChild(container);
var request = new XMLHttpRequest();
//request.open('GET', , true);
request.open('GET', 'https://archive.org/metadata/GratefulDead/files', true);
console.log(request.response);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        console.log(data);
        for (i = 0; i < data.result.length; i++) {
            console.log(data.result[i].name);
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = data.result[i].name;

            // const p = document.createElement('p');
            // result[i].name = result[i].name.substring(0, 300);
            // p.textContent = `${result[i].name}...`;

            container.appendChild(card);
            card.appendChild(h1);

        }
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `I'm sorry, the request to the external api is experienceing difficulties`;
        app.appendChild(errorMessage);
    }
}

request.send();