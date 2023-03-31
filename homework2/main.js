const numberN = +prompt("Введіть число N");
const numberM = +prompt("Введіть чилос M");
const skipPairInt = confirm("Пропускати парні числа?");

let sum = 0;
for (let i = numberN; i <= numberM; i++) {
    if (skipPairInt && i % 2 === 0) {
        continue;
    }
    sum += i;
}

console.log(sum);
