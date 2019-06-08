
// GD == Grateful Dead Var
// single global variable
var GD =
{
    day: null,

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


            str += '<div class="card"><h1>' + title + '</h1>' +
                '<p>' + desc + '</p></div>';
        }

        obj.innerHTML = str;

        // now add this new div to the <body>!
        body.appendChild(obj);
    },

}