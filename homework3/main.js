// function 1;

const getMaxDigit = (n) => Math.max(...(n + '').split(''));

// fuction 2;

function pow(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}

//function 3;

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

//function 4;

const salaryTax = (salary) => salary - salary * 0.195;

//function 5;

function randomIntFromInterval(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

//function 6;

function letterInWord(str, letter) {
  let letter_Count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      letter_Count++;
    }
  }
  return letter_Count;
}

document.writeln(`
function 1: ${getMaxDigit(1236567330234)}<br>
function 2: ${pow(2, 3)}<br>
function 3: ${capitalizeFirstLetter('вЛАД')}<br>
function 4: ${salaryTax(1000)}<br>
function 5: ${randomIntFromInterval(1, 10)}<br>
function 6: ${letterInWord('Асталавіста', 'а')}<br>
`);
