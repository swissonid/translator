///<reference path="../../../typings/mocha/mocha.d.ts"/>
///<reference path="../../../typings/chai/chai.d.ts"/>
///<reference path="../lib/Writer.ts"/>
///<reference path="../lib/Word.ts"/>
/**
 * Module dependencies
 */
var chai = require('chai');
var Writer_1 = require('../lib/Writer');
/**
 * Globals
 */
var expect = chai.expect;
var testWords = [
    {
        'key': 'download',
        'value': 'download'
    },
    {
        'key': 'upload',
        'value': 'upload'
    }
];
describe('Testing Envirument: ', function () {
    it('should be 6', function (done) {
        expect(2 + 4).to.equals(6);
        done();
    });
    it('should not be 6', function (done) {
        expect(2 + 2).to.not.equals(6);
        done();
    });
});
describe('Testing Writer: ', function () {
    it('should have xml definition in the first line', function (done) {
        expect(Writer_1.default.convert(testWords[0])).to.equals('<string name="download">download</string>');
        expect(Writer_1.default.convert(testWords[1])).to.equals('<string name="upload">upload</string>');
        done();
    });
    it('should wire the correct resource', function (done) {
        expect(Writer_1.default.createResource(testWords)).to.equals('<resources>'
            + '\n\t<string name="download">download</string>'
            + '\n\t<string name="upload">upload</string>'
            + '\n</resources>');
        done();
    });
});

//# sourceMappingURL=../test/test.js.map