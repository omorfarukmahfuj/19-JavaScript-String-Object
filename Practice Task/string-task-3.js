const myString = "education";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let containsAllVowels = true;
for (let vowel of vowels) {
  if (!myString.toLowerCase().includes(vowel)) {
    containsAllVowels = false;
    break;
  }
}

console.log(containsAllVowels);