
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let isString = function(n) {
  let num =  Number(n);
  if (typeof n === 'string' && isNaN(num)) {
    return true;
  } 
  return false;
};

const validateNumber = function (question, answer) {
  let res;
  do {
    res = prompt(question, answer);
  } while (!isNumber(res));
  return res;
};

const validateString = function (question, answer) {
  let res;
  do {
    res = prompt(question, answer);
  } while (!isString(res));
  return res;
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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {

    if(confirm('Есть ли у вас дополнительный заработок?')){
        let itemIncome = validateString('Какой у вас дополнительный заработок', ' Таксо');
        let cashIncome = validateNumber('Сколько в месяц вы на этом зарабатывайте?', 10000);
        appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую: Такси, Аренда, Звонки");
    appData.addExpenses = addExpenses.toLowerCase().split(',');
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
        sum += prompt(" Во сколько это обойдется?");
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
      appData.budgetMonth = appData.budget - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getAccumulatedMonth: function () {
    return appData.money - appData.expensesMonth;
  },

  getTargetMonth: function () {
    let res = Math.floor(appData.mission / appData.budgetMonth);
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
  getInfoDeposit: function(){
      if(appData.deposit){
          appData.percentDeposit = validateNumber('Какой годовой процент?', '10');
          appData.moneyDeposit = validateNumber("Какая сумма заложена?", 10000);
      }
  },
  calcSavedMoney: function(){
      return appData.budgetMonth * appData.period
  },
};


appData.asking();
appData.getExpensesMonth();
appData.getTargetMonth();
console.log(appData.getStatusIncome());
// console.log('Расходы за месяц: ', appData.expensesMonth());
console.log('Уровень дохода: ', appData.getStatusIncome());
console.log('Наif программа включает в себя данные: ');
for (let elem in appData){
    console.log(elem, appData[elem]);
}
appData.getInfoDeposit();
console.log(appData.moneyDeposit, appData.percentDeposit, calcSavedMoney());

