
// GD == Grateful Dead Var
// single global variable
var GD =
{
    day: null,

    this_day_in_history: function (obj) {
        this.day = obj; //save away
    },



    drawit: function () {
        var str = '';

        // we will get the <body> tag from the "DOM" and append a new <div> there
        var body = document.getElementsByTagName("body")[0];
        var obj = document.createElement('div');
        obj.setAttribute('class', 'cardContainer');
        var pid = this.day.response.docs;

        // search hits
        for (var hit, i = 0; hit = this.day.response.docs[i]; i++) {
            var title = hit.title;
            var desc = hit.description;
            var ident = hit.identifier;

            // depriciated non-local image pull
            // str += '<a class="card" href = "show.html?link=' + ident + '"><h1>' + title + '</h1>' +
            //     '<p><img src = "https://ia600201.us.archive.org/0/items/gd1995-06-04.sennME40.sturtevant-swayne.85716.flac1648/gd95-06-04s1t03.png">' + desc + '</p></a>';
            // Get our image and populate the cards
            str += '<a class="card" href = "show.html?link=' + ident + '"><h1>' + title + '</h1>' +
                '<p><img src = "images/sound-wave-transparent.png" style="height: 5rem; width: 90%">' + desc + '</p></a>';
        }

        // Test links
        //https://archive.org/details/gd1980-06-07.142842.set1.aud.sterry.beckwith.miller.clugston.flac1648
        //https://archive.org/details/ident 


        obj.innerHTML = str;

        // now add this new div to the <body>!
        body.appendChild(obj);
    },

}