//1
const getRandomArray = (length, min, max) => {
  const randomNumbers = [];
  for (let i = 0; i < length; i++) {
    randomNumbers.push(Math.floor(min + Math.random() * (max + 1 - min)));
  }
  return randomNumbers;
};

//2
const getModa = (...numbers) => {
  const intNum = numbers.filter((num) => Number.isInteger(num));
  let mode = 0;
  let counter = 0;
  for (let i = 0; i < intNum, length; i++) {
    let matchCounter = 0;
    for (let k = 0; k < intNum.length; k++) {
      if (intNum[i] === intNum[k]) {
        matchCounter++;
      }
    }
    if (matchCounter > counter) {
      mode = intNum[i];
      counter = matchCounter;
    }
  }
  return mode;
};

//3
const getAverage = (...numbers) => {
  const result = numbers.filter((number) => Number.isInteger(number));
  return (result.reduce((a, b) => a + b) / result.length).toFixed(1);
};
//4
const getMedian = (...numbers) => {
  const result = numbers
    .filter((number) => Number.isInteger(number))
    .sort((a, b) => a - b);
  if (result.length % 2) {
    return result[Math.floor(result.length / 2)];
  }
  return (result[result.length / 2] + result[result.length / 2 - 1]) / 2;
};

//5
const filterEvenNumbers = (...numbers) =>
  numbers.filter((number) => number % 2);

//6
const countPositiveNumbers = (...numbers) =>
  numbers.filter((number) => number > 0).length;

//7
const getDividedByFive = (...numbers) => numbers.filter((num) => num % 5 === 0);

const randomNumbers = getRandomArray(15, 1, 100);
const average = getAverage(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);
const mode = getModa(
  6,
  2,
  55,
  55,
  55,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);
const median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
const evenNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6);
const positiveNumbers = countPositiveNumbers(1, -2, 3, -4, -5, 6);
const dividedByFive = getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
);

document.writeln(`1: ${randomNumbers}<br>
2: ${getModa(...randomNumbers)}<br>
3: ${getAverage(...randomNumbers)}<br>
4: ${getMedian(...randomNumbers)}<br>
5: ${filterEvenNumbers(...randomNumbers)}<br>
6: ${countPositiveNumbers(...randomNumbers)}<br>
7: ${getDividedByFive(...randomNumbers)};<br>`);
