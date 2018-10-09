let myArr = [1, 2, 3, 4, 5];
let reversedArray = [];
let anotherArray = [];
let anotherOne = [];
let anothArr = [];
let newArray = [];

// WITH A FOR-LOOP //
for (var i = 1; i < myArr.length + 1; i++) {
  reversedArray.push(i);
}
reversedArray.reverse('').join('');


// WITH A FOREACH FUNCTION //
myArr.forEach(function(element){
  anotherArray.push(element);
});
anotherArray.reverse(' ').join(' ');

// USING SLICE & REVERSE //
anotherOne = myArr.slice(' ').reverse('');
// USING SPLICE & REVERSE (this method erases the original array//
anothArr = myArr.splice(0,6).reverse('');



//console.log(myArr);
console.log(reversedArray);
console.log(anotherArray);
console.log(anotherOne);
console.log(anothArr);


// OR... JUST USING THE REVERSE METHOD (this one changes also the old array) //
let aArr = [1, 2, 3, 4, 5];
let aNewArray = [];
console.log(aArr);
aNewArray = aArr.reverse();
console.log(aNewArray);
