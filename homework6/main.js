const students = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

//1
const getSubject = (students) =>
  Object.keys(students.subjects).map(
    (subject) =>
      subject.substring(0, 1).toUpperCase() +
      subject.substring(1).toLocaleLowerCase().replaceAll('_', ' ')
  );

//2
const getAverageMark = (students) => {
  let quantity = Object.values(students.subjects).length;
  return (
    Object.values(students.subjects)
      .map((marks) =>
        marks.reduce((acc, mark) => {
          quantity++;
          return acc + mark;
        })
      )
      .reduce((acc, mark) => acc + mark) / quantity
  ).toFixed(2);
};

//3

const getStudentInfo = (students) => {
  return {
    name: students.name,
    course: students.course,
    averageMark: getAverageMark(students) / 1,
  };
};

//4
const getStudentNames = (names) =>
  names.map((students) => students.name).sort();

//5
const getBestStudent = (students) =>
  students.sort((a, b) => getAverageMark(b) - getAverageMark(a))[0].name;

//6
const calculateWordLetters = (word) => {
  const wordLowerCased = word.toLowerCase().split('');
  const result = {};

  wordLowerCased.map((item) =>
    !result[item] ? (result[item] = 1) : result[item]++
  );

  return result;
};

console.log(getSubject(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters('тест'));
