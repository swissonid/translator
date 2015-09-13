///<reference path="Word.ts"/>

import Word from 'Word';

export default class AndroidWriter {

    static convert (data:Word) {
        return '<string name="' + data.key + '">' + data.value + '</string>';
    }

    static createResource (words:Array<Word>) {
        var resource: string = '<resources>';
        words.forEach( word => {
            resource += '\n\t' + this.convert(word);
        });
        resource += '\n</resources>';
        return resource;
    }
}
