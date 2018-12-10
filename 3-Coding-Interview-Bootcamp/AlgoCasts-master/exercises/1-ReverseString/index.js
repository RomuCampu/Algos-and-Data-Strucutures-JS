// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// EASY WAY //
function reverse(str) {
    return str.split('').reverse().join('');
}

for (var i = 0; i < str.length; i++) {

}

// INTERMEDIATE //
function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

module.exports = reverse;

// ADVANCED WAY /
function reverse() {
    return str.split().reduce((reversed, character) => {
        return character + reversed;
    }, '');
}