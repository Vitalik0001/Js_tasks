let money = +prompt("Який ваш бюджет на місяць?", "");
let time = prompt("Введіть дату в форматі YYYY-MM-DD", "");

const appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Введіть обов'язкову статтю витрат в цьому місяці", "");
  const b = prompt("Скільки буде коштувати?", "");
  appData.expenses[a] = b;
}

alert("Бюджет на 1 день: " + Math.round(appData.budjet / 30));
