/**
 *
 * @param {String} string
 */

 function wordsUppercase(string) {
    let result = string.toUpperCase().match(/\w+/g);
    console.log(result.join(', '))
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');