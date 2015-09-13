/**
 * Created by pmueller on 13.9.15.
 */

import fs = require('fs');

/*var execel = require('node-xlsx');
var fs = require('fs');

var test_word = {
    "androidKey" : "success_msg",
    "data":{
        "default":"Success Message",
        "de":"Erfolgs Nachricht",
        "fr":"message du succès"
    }
};

var errorHandler = function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
};

var createAndroidXML = function(){

}*/

var errorHandler = function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('The file was saved!');
};

console.log('Hallo welt from TypeScript');
//fs.writeFile('./test.txt', 'Hey there! From ts', errorHandler);
