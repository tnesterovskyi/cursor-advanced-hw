const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = [
  'Диференційне рівняння',
  'Теорія автоматів',
  'Алгоритми і структури даних',
];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = function (students) {
  const pairs = [];
  const boys = [];
  const girls = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith('а')) {
      girls.push(students[i]);
      continue;
    }
    boys.push(students[i]);
  }
  for (let i = 0; i < boys.length; i++) {
    pairs.push([boys[i]].concat([girls[i]]));
  }
  return pairs;
};
const pairs = getPairs(students);
console.log(pairs);

//II

const getThemes = function (pairs, themes) {
  const pairsThemes = [];
  for (let i = 0; i < pairs.length; i++) {
    pairsThemes.push(
      [[pairs[i][0]] + ' i ' + [pairs[i][1]]].concat([themes[i]])
    );
  }
  return pairsThemes;
};

const pairsThemes = getThemes(pairs, themes);
console.log(pairsThemes);

//III
const getMark = function (students, marks) {
  const studentsMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsMarks.push([students[i]].concat([marks[i]]));
  }
  return studentsMarks;
};
const studentsMarks = getMark(students, marks);
console.log(studentsMarks);

//IV

const randomMark = function (pairsThemes) {
  const themesMarks = [];
  for (let i = 0; i < pairsThemes.length; i++) {
    themesMarks.push(pairsThemes[i].concat([Math.ceil(Math.random() * 5)]));
  }
  return themesMarks;
};
const rating = randomMark(pairsThemes);
console.log(rating);
