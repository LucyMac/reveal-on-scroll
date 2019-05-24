
const baseValue = 4;

// aim to reduce this list if not all used
const multiples = [ 
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12
];

const spacing = multiples.map(multiple => {
  return multiple * baseValue + 'px';
})

export default spacing;