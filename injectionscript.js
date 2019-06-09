
// GD == Grateful Dead Var
// single global variable
var GD =
{
    day: null,
    img: null,
    this_day_in_history: function (obj) {
        this.day = obj; //save away
    },



    drawit: function () {
        // all JSON services/results are in and we can draw up the page now!



        var str = '';

        // <div style="width:300px;" class="box"><h1>A favorite archive.org film of mine is: </h1>\n\
        // <br/><a href="https://archive.org/details/' +
        //             1 + '"><img src="https://archive.org/download/' +
        //             1 +
        //             '/format=Animated+Gif"/></a><br/>and it has the following formats: <ul></div>';


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
            var img;
            var dir;
            //access individual show's metadata to get info for image and embedded music player
            //sourced from: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"
            var requestURL = "https://archive.org/metadata/" + ident;
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var showData = request.response;
                console.log(showData['dir']);
                console.log(showData.files[0].name);
                dir = showData.dir;
                imgPathname = showData.files[0].name;
                console.log(imgPathname);
            }


            str += '<a class="card" href=https://archive.org/details/' + ident + '><h1>' + title + '</h1>' +
                '<p><img src = "https://ia600201.us.archive.org/0/items/gd1995-06-04.sennME40.sturtevant-swayne.85716.flac1648/gd95-06-04s1t03.png"' + desc + '</p></a>';
        }

        obj.innerHTML = str;

        // now add this new div to the <body>!
        body.appendChild(obj);
    },

}