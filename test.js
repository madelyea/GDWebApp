
// GD == Grateful Dead Var
//single global variable
var GD =
{
    day: null,
    //   title:null,
    //   desc:null,


    this_day_in_history: function (obj) {
        this.day = obj; //save away
    },

    //   search_hits:function(obj)
    //   {
    //     this.hits = obj; //save away
    //   },

    //   favorite:function(obj)
    //   {
    //     this.fave = obj; //save away
    //   },



    drawit: function () {
        // all JSON services/results are in and we can draw up the page now!

        this.css('\n\
div.box  \n\
{ \n\
  float:left; \n\
  border:  2px solid #D9E4FF;  /* #afe14c;*/ \n\
  padding: 20px 10px; \n\
  width: 375px; \n\
  margin: 20px 5px; \n\
  -moz-border-radius: 7px;/* firefox */ \n\
  -webkit-border-radius:7px;/* safari */ \n\
  -khtml-border-radius:7px;/* safari? */ \n\
  border-radius: 7px;/* opera, CSS3 */ \n\
} \n\
 \n\
div.box h1  \n\
{ \n\
  display:inline; \n\
  position: relative; \n\
  top:  -29px; \n\
  padding: 0px 5px; \n\
  font: 700 14px Arial, Helvetica, sans-serif; \n\
  color: #73b304; \n\
} \n\
body, div.box h1 { \n\
  background-color: #FFF; \n\
} \n\
');

        var str = '<div class="box"><h1>Welcome to My Archive </h1><br/>\n\
I like archive.org because it has over... great videos.<br/>\n \
\n\
</div>\n';
        // <div style="width:300px;" class="box"><h1>A favorite archive.org film of mine is: </h1>\n\
        // <br/><a href="https://archive.org/details/' +
        //             1 + '"><img src="https://archive.org/download/' +
        //             1 +
        //             '/format=Animated+Gif"/></a><br/>and it has the following formats: <ul></div>';


        // we will get the <body> tag from the "DOM" and append a new <div> there
        var body = document.getElementsByTagName("body")[0];
        body.style.padding = '20';

        var obj = document.createElement('div');

        var pid = this.day.response.docs;

        // search hits

        for (var hit, i = 0; hit = this.day.response.docs[i]; i++) {
            var title = hit.title;
            var desc = hit.description;
            var ident = hit.identifier;
            // var img = (mt.toLowerCase() == 'movies' || mt.toLowerCase() == 'movingimage' ?
            //     'movies' :
            //     (mt.toLowerCase() == 'audio' || mt.toLowerCase() == 'sound'
            //         || mt.toLowerCase() == 'etree' ? 'audio' :
            //         (mt.toLowerCase() == 'texts' ? 'text' : '')));
            // if (img)
            //     img = '<img src="https://archive.org/images/mediatype_' + img + '.gif"/>';


            str += '<div class="box"><h1>Search hit: ' + i + '</h1><br/>' +
                // 'Link to Show: <a href="https://archive.org/details/' +
                // ident + '">' + ident +
                '</a><br><a style="margin-left:30px;" href="https://archive.org/details/' +
                ident + '">' + title + desc + '</a></div>';

            // str += '<div class="box"><h1>Hit number: ' + i + '</h1><br/>' + img + ' ' +
            //     mt +
            //     ' item, part of collection: <a href="https://archive.org/details/' +
            //     collex + '">' + collex +
            //     '</a><br><a style="margin-left:30px;" href="https://archive.org/details/' +
            //     hit.identifier + '">' + hit.title + '</a></div>';
        }

        obj.innerHTML = str;

        // now add this new div to the <body>!
        body.appendChild(obj);
    },


    css: function (str) {
        var obj = document.createElement('style');
        obj.setAttribute('type', 'text/css');
        if (obj.styleSheet)
            obj.styleSheet.cssText = str; //MSIE
        else
            obj.appendChild(document.createTextNode(str)); // other browsers

        var headobj = document.getElementsByTagName("head")[0];
        headobj.appendChild(obj);
    }

}