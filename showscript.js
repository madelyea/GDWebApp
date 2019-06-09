
// GD == Grateful Dead Var
// single global variable
var GD =
{
    day: null,

    this_day_in_history: function (obj) {
        this.day = obj; //save away
    },



    drawit: function () {
        var body = document.getElementsByTagName("body")[0];
        var obj = document.createElement('div');
        obj.setAttribute('class', 'body');
        var pid = this.day.response.docs;

        // Get the individual page details and inject into the str
        var hit = this.day.response.docs[0];  // This will need to dynamically set the right card
        var title = hit.title;
        var desc = hit.description;
        var ident = hit.identifier;

        var strResult = '<div class="body">';
        strResult += '<h2>' + title + '</h2><br><p class="p2">' + desc + '</p>';

        strResult += '</div>';


        obj.innerHTML = strResult;

        // now add this new div to the <body>!
        body.appendChild(obj);
    },

}