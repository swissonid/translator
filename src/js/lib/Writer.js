///<reference path="Word.ts"/>
var AndroidWriter = (function () {
    function AndroidWriter() {
    }
    AndroidWriter.convert = function (data) {
        return '<string name="' + data.key + '">' + data.value + '</string>';
    };
    AndroidWriter.createResource = function (words) {
        var _this = this;
        var resource = '<resources>';
        words.forEach(function (word) {
            resource += '\n\t' + _this.convert(word);
        });
        resource += '\n</resources>';
        return resource;
    };
    return AndroidWriter;
})();
exports.default = AndroidWriter;

//# sourceMappingURL=../lib/Writer.js.map