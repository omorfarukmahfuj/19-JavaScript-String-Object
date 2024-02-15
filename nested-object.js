const pen = {
  brand: 'matador',
  ink: {
    color: 'black',
    type: 'ballpoint'
  },
  body: {
    color: 'pink',
    material: 'plastic'
  },
  features: ['click mechanism', 'rubber grip'],
  price: 10
};

console.log(pen.ink.color);
console.log(pen.body.material);
console.log(pen.features[0]);
delete pen.features;
console.log(pen);