
// GD == Grateful Dead Var
// single global variable
var GD =
{
    day: null,

    this_day_in_history: function (obj) {
        this.day = obj; //save away
    },



    drawit: function () {
        var title = null;
        var desc = null;
        var ident = null;
        var notes = null;
        var runtime = null;
        var location = null;


        var body = document.getElementsByTagName("body")[0];
        var obj = document.createElement('div');
        obj.setAttribute('class', 'body');
        // var pid = this.day.response.docs;

        //get ident from the link 
        var path = window.location.href;
        console.log(path);
        index = path.search("=");
        ident = path.slice(index + 1, path.length);
        console.log(ident);

        // Get the individual page details and inject into the str

        var requestUrl = "https://archive.org/metadata/" + ident;
        console.log(requestUrl);

        var request = new XMLHttpRequest();
        request.open('GET', requestUrl);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            var showData = request.response;
            console.log(showData['dir']);
            dir = showData.dir;
            title = showData.metadata.title;
            desc = showData.metadata.description;
            console.log(desc);
            notes = showData.metadata.notes;
            runtime = showData.metadata.runtime;
            location = showData.metadata.coverage;


            var strResult = '<div class="body" style="line-height:24px">';
            strResult += '<h2>' + title + '</h2><div><h3>' + location + '</h3>';
            if (runtime != null) {
                strResult += '<h3>Total Runtime:<p class="p2">' + runtime + '</p>';
            }
            strResult += '</div><br><div><iframe src="https://archive.org/embed/' + ident + '"position="static" width="650" height="40" align="left" margin-left="6rem" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe></div><br><br><br><br><br><br><div><h3>Set List:</h3><p class="p2">' + desc + '</p>' + '<p class = "p2">' + notes + '</p></div><br.<br><br><br>';

            // strResult += '<h2>' + title + '</h2><iframe src="https://archive.org/embed/' + ident + '" width="500" height="140"  frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe><p class="p2">' + desc + '</p>' + '<p class = "p2">' + notes + '</p>';

            strResult += '</div>';


            obj.innerHTML = strResult;

            // now add this new div to the <body>!
            body.appendChild(obj);
        }
    },

}