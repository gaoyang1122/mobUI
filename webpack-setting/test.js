var marked = require('marked');
var renderer = new marked.Renderer();

renderer.heading = function (text, level) {
    var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    console.log(text)
    console.log(level)
    console.log(escapedText)
    return '<h' + level + '><a name="' +
        escapedText +
        '" class="anchor" href="#' +
        escapedText +
        '"><span class="header-link"></span></a>' +
        text + '</h' + level + '>';
},

    console.log(marked('```demo \n console.log("hello"); \n ```', { renderer: renderer }));
console.log(marked('```js \n console.log("hello"); \n ```', { renderer: renderer }));
console.log(marked('# aaaaaaaaaaaaaaaaa++++++++++++++++++++', { renderer: renderer }));