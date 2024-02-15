const pen = {
  brand: 'matador',
  inkColor: 'black',
  bodyColor: 'pink',
  type: 'ball pen',
  price: 10
}

const person = {
  name: 'Omor Faruk',
  age: 20,
  profession: 'developer',
  married: false,
  'favorite places': ['Dubai', 'Cox\'s Bazar', 'Sundarbans']
}

console.log(person.age); // dot notation
console.log(person['married']); // bracket notation
console.log(person['favorite places']);