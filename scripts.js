const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

// Get the correct filters from the user
var categorySelector = document.getElementById('categorySelector').value;

app.appendChild(container);
var request = new XMLHttpRequest();

// open based on the filter options
if (categorySelector === 'albums'){
    request.open('GET', 'https://archive.org/metadata/ArchiveIt-Collection-5934/files', true);
} else {
    request.open('GET', 'https://archive.org/metadata/GratefulDead/files', true);
}

//request.open('GET', 'https://archive.org/metadata/GratefulDead/files', true);

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

            container.appendChild(card);
            card.appendChild(img);
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