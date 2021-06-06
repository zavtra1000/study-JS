
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = function () {
    do {
      money = prompt(" Ваш месячный доход?");
    } while (!isNumber(money));
    money = prompt(" Ваш месячный доход?");
  };
start();

let appData = {
  income: {},
  addInncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = +prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую: Такси, Аренда, Звонки"
    );
    // appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm("Есть ли у вас депозит в банке");
  },

  getExpensesMonth: function () {
    let expenses = [];
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      expenses[i] = prompt(
        " введите обязательную статью расходов",
        " Транспорт"
      );
      do {
        sum += +prompt(" Во сколько это обойдется?");
      } while (!isNumber(sum));
    }

    return sum;
  },

  getExpensesMonth: function(){
      appData.expensesMonth = 0;
      for (let elem in appData.expenses){
          appData.expensesMonth += appData.expenses[elem];
      }
  },

  getBudget: function(){
      return appData.budgetMonth - appData.budgetDay;
  },

  getAccumulatedMonth: function () {
    return appData.money - appData.expensesMonth;
  },

  getTargetMonth: function () {
    let res = Math.floor(appData.mission / appData.accumulatedMonth);
    if (res > 0) {
      console.log("Цель будет достигнута: " + res + "месяцев");
    } else {
      console.log("Цель не будет достигнута");
    }
    return res;
  },

  getStatusIncome: function () {
    if (appData.budgetDay < 300) {
      return "У вас низкий уровень дохода";
    } else if (appData.budgetDay <= 800) {
      return " У вас средний уровень дохода";
    } else {
      return " Высокий уровень дохода";
    }
    // console.log(getStatusIncome());
  },
};


appData.asking();
appData.getExpensesMonth();
appData.getTargetMonth();
console.log(appData.getStatusIncome());
console.log('Расходы за месяц: ', appData.expensesMonth());
console.log('Уровень дохода: ', appData.getStatusIncome());


