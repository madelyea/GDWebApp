const app = document.getElementById('results');

const cardContainer = document.createElement('div');
cardContainer.setAttribute('class', 'cardContainer');

app.appendChild(cardContainer);
var request = new XMLHttpRequest();

request.open('GET', 'https://archive.org/metadata/october13_201810/files', true);

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

            // Add title
            const h1 = document.createElement('h1');
            h1.textContent = data.result[i].name;

            // Add photo
            // const img = document.createElement('img');
            // data.result[i].source = data.result[i].source;

            // Add description
            const p = document.createElement('p');
            data.result[i].name = data.result[i].name.substring(0, 300);
            p.textContent = `${data.result[i].name}...`;

            cardContainer.appendChild(card);
            // card.appendChild(img);
            card.appendChild(h1);
            card.appendChild(p);
        }
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `I'm sorry, the request to the external api is experienceing difficulties`;
        app.appendChild(errorMessage);
    }
}

request.send();