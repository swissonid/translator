/**
 * Created by pmueller on 13.9.15.
 */

import fs = require('fs');

var errorHandler = function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('The file was saved!');
};

console.log('Hallo welt from TypeScript');
//fs.writeFile('./test.txt', 'Hey there! From ts', errorHandler);
