const sentence = 'I am learning Web Dev.';
let reverse = '';

/*
// Method 1
for (const letter of sentence) {
  reverse = letter + reverse;
}
console.log(reverse);


//  Method 2
for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  reverse = letter + reverse;  
}
console.log(reverse);
*/


// Method 3
reverse = sentence.split('').reverse().join('')
console.log(reverse);