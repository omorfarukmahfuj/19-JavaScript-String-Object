const pen = {
  brand: 'matador',
  inkColor: 'black',
  bodyColor: 'pink',
  type: 'ball pen',
  price: 10
}

for (const prop in pen) {
  console.log(pen[prop]);
}

const keys = Object.keys(pen);
console.log(keys);