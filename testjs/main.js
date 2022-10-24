const characters = [
  {
    names: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    names: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    names: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'blue',
    gender: 'female',
  },
  {
    names: 'Angel',
    height: '163',
    mass: '55',
    eye_color: 'blue',
    gender: 'female',
  },
];

const names = characters.map((character) => character.names);
console.log(names);

const heights = characters.map((character) => character.height);
console.log(heights);

const twoStats = characters.map((character) => ({
  name: character.names,
  height: character.height,
}));
console.log(twoStats);

const firstNames = characters.map((character) => character.names.split(' ')[0]);
console.log(firstNames);
