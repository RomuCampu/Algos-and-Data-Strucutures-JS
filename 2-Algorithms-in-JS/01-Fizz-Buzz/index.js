// Fizz Buzz 
// The easy way
function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
};
console.log(fizzBuzz(10));

function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
};
console.log(fizzBuzz(30));



//fizzBuzz(30);