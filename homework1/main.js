const shoesPrice = 15.678;
const shirtsPrice = 123.965;
const hatsPrice = 90.2345;

const maxPrice = Math.max(shoesPrice, shirtsPrice, hatsPrice);
const minPrice = Math.min(shoesPrice, shirtsPrice, hatsPrice);
const sumPrice = shoesPrice + shirtsPrice + hatsPrice;
const sumFloor = Math.floor(shoesPrice) + Math.floor(shirtsPrice) + Math.floor(hatsPrice);
const roundSumPrice = Math.round(sumFloor / 100) * 100;
const sumOddOrEvenSum = !(sumFloor % 2);
const total = 500 - sumPrice;
const everage = +(sumPrice / 3).toFixed(2);
const randomDiscount = Math.round(Math.random() * 100);
const sumToPay = ((100 - randomDiscount) * sumPrice / 100).toFixed(2);
const selfPrice = (sumPrice / 2).toFixed(2);
const income = (selfPrice - (randomDiscount * sumPrice / 100)).toFixed(2);

console.log(`
Максимальна ціна: ${maxPrice} <br>
Мінімальна ціна: ${minPrice} <br>
Вартість товарів: ${sumPrice} <br>
Округлена вартість: ${sumFloor} <br>
Сума товарів до сотень: ${roundSumPrice} <br>
Визначення парного числа: - ${sumOddOrEvenSum} <br>
Решта: ${total} <br>
Середнє значення ціни: ${everage} <br>
Рандомне число: ${randomDiscount} <br>
Сума до сплати: ${sumToPay} <br>
Собівартість: ${selfPrice} <br>
Прибуток: ${income}
`);