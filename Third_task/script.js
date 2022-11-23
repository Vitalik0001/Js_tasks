let money = +prompt('Який ваш бюджет на місяць?', '');
let time = prompt('Введіть дату в форматі YYYY-MM-DD', '');

const appData = {
	budjet: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt('Введіть обов\'язкову статтю витрат в цьому місяці', '');
	const b = prompt('Скільки це буде коштувати?', '');
	appData.expenses[a] = b;
}

function detectDayBudget(budjet) {
	alert('Бюджет на 1 день: ' + Math.round(budjet / 30));
}
/* detectDayBudget(appData.budjet); */

function detectLevel(budjet) {
	if (budjet < 100000) {
		alert('bad');
	} else if (budjet >= 100000 && budjet < 1000000) {
		alert('normal');
	} else {
		alert('excellent');
	}
}
/*  detectLevel(appData.budjet); */

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		const a = prompt('Стаття необов\'язкових розходів?', '');
		appData.optionalExpenses[i + 1] = a;
	}
}
chooseOptExpenses();

console.log(appData);