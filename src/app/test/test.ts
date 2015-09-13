
///<reference path="../../../typings/mocha/mocha.d.ts"/>
///<reference path="../../../typings/chai/chai.d.ts"/>
///<reference path="../lib/Writer.ts"/>
///<reference path="../lib/Word.ts"/>

/**
 * Module dependencies
 */
import chai = require('chai');
import Writer from '../lib/Writer';
/**
 * Globals
 */
var expect = chai.expect;
var testWords = [
    {
        'key':'download',
        'value':'download'
    },
    {
        'key':'upload',
        'value':'upload'
    }
];

describe ('Testing Envirument: ', () => {
    it ('should be 6', (done) => {
        expect (2 + 4).to.equals(6);
        done();
    });

    it ('should not be 6', (done) => {
        expect (2 + 2).to.not.equals(6);
        done();
    });
});

describe ('Testing Writer: ', () => {

    it ('should have xml definition in the first line', (done) => {
        expect (Writer.convert(testWords[0])).to.equals('<string name="download">download</string>');
        expect (Writer.convert(testWords[1])).to.equals('<string name="upload">upload</string>');
        done();
    });

    it ('should wire the correct resource', (done) => {
        expect (Writer.createResource(testWords)).to.equals(
        '<resources>'
            + '\n\t<string name="download">download</string>'
            + '\n\t<string name="upload">upload</string>'
        + '\n</resources>'
        );
        done();
    });
});

