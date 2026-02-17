//Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.
let num = 0;
while (num < 10) {
  num++;
  console.log(num);
}

// Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.
const min = 2;
const max = 20;

for (let i = min; i <= max; i += 1) {

  if (i === 0) {
    continue;

  }
  if (i % 2 !== 0) {
    console.log(i);

  }
}

// Вивести в консоль таблицю множення числа 7 за допомогою циклу for.
const numberMin = 7;
const numberMax = 70;

for (let i = numberMin; i <= numberMax; i += 1) {
  if (i % 7 === 0) {
    console.log(i);
  }
  
}

// Створити скрипт, який виводить в консоль всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
const n = 100;
for (let i = 0; i < n; i++) {
  console.log(i);
  if (i >= n) {
    break;
  }
}

// За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
let numWhile = 0;
while (numWhile < 20) {
  if (numWhile % 3 === 0) {
    numWhile++;
    continue;
    }
    console.log(numWhile);
    numWhile++;
}