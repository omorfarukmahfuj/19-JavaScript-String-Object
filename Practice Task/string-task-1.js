const myString = "JavaScript Is Amazing!";
let count = 0;
for (let i = 0; i < myString.length; i++) {
  if (myString[i] === 'a') {
    count++;
  }
}
console.log(count);