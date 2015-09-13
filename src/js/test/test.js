/**
 * Created by pmueller on 13.9.15.
 */
///<reference path="../../../typings/mocha/mocha.d.ts"/>
///<reference path="../../../typings/chai/chai.d.ts"/>
var chai = require('chai');
/**
 * Module dependencies
 */
/**
 * Globals
 */
var expect = chai.expect;
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

//# sourceMappingURL=../test/test.js.map