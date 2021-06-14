
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

//  добавил из дебага
// const start = document.getElementsById('start');

const buttonStart = document.getElementById("start");
console.log('buttonStart: ', buttonStart);


const incomeAdd = document.getElementsByTagName("button")[0];
console.log('incomeAdd: ', incomeAdd);
const expensesAdd = document.getElementsByTagName("button")[1];
console.log('expensesAdd: ', expensesAdd);

const depostCheck = document.querySelectorAll("#deposit-check");
console.log('depostCheck: ', depostCheck);

const additionalIncomeItem = document.querySelectorAll('.additional_income-item')
console.log('additionalIncomeItem: ', additionalIncomeItem);


const resultTotal = document.querySelectorAll(".result-total");
console.log('resultTotal: ', resultTotal);

const budgetMonthValue = document.getElementsByClassName("budget_month-value");
console.log('budgetMonthValue: ', budgetMonthValue);

const budgetDayValue = document.getElementsByClassName("budget_day-value");
console.log('budgetDayValue: ', budgetDayValue);

const expensesMonthValue = document.getElementsByClassName("expenses_month-value")
console.log('expensesMonthValue: ', expensesMonthValue);

const additionalIncomeValue = document.getElementsByClassName("additional_income-value")
console.log('additionalIncomeValue: ', additionalIncomeValue);

const additionalExspensesValue = document.getElementsByClassName("additional_expenses-value")
console.log('additionalExspensesValue: ', additionalExspensesValue);

const incomePeriodValue = document.getElementsByClassName("income_period-value")
console.log('incomePeriodValue: ', incomePeriodValue);

const targetMonthValue = document.getElementsByClassName("target_month-value");
console.log('targetMonthValue: ', targetMonthValue);




const salaryAmount = document.querySelector(".salary-amount");
console.log("salaryAmount: ", salaryAmount);

const incomeItems = document.querySelectorAll(".income-items");
const incomeTitle = document.querySelector('.income-title');
// const incomeAmount = document.querySelector('.income-amount');


const expensesItems = document.querySelector(".expenses-items");
const expensesTitle = document.querySelector('.expenses-title');
const expensesItem = document.querySelectorAll(".expenses-items");

const additionalExpensesItem = document.querySelector(".additional_expenses-item");
console.log("additionalExpensesItem: ", additionalExpensesItem);

const depositAmount = document.querySelector(".deposit-amount");
console.log("depositAmount: ", depositAmount);

const depositPercent = document.querySelector(".deposit-percent");
console.log("depositPercent: ", depositPercent);

const targetAmount = document.querySelector(".target-amount");
console.log("targetAmount: ", targetAmount);

const periodSelect = document.querySelector('.period-select');

// конец дебага
 


let appData = {
  income: {},
  addInncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  // mission: 50000,
  // period: 3,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  incomeMonth: 0,
   start: function () {
    
    if (salaryAmount.value === '') {
      alert(' Ошибка, поле месячный доход не заполнено')
      return;
    }
    appData.budget = +salaryAmount.value;
    console.log('salaryAmount.value: ', salaryAmount.value);
    

    appData.getExpenses();
    appData.getIncome();
    // appData.asking();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getTargetMonth();
    appData.getBudget();
    appData.showResult();
  },

  showResult: function() {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExspensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addInncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcSavedMoney();
  },

  addExpensesBlock: function() {
    let expensesItem = document.querySelectorAll(".expenses-items");
    let cloneExpensesItem = expensesItem[0].cloneNode(true);
    expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
    expensesItem = document.querySelectorAll(".expenses-items");
    if (expensesItem.length === 3){
      expensesAdd.style.display = 'none';
    }
  },

  getIncome: function(){
     if (confirm("Есть ли у вас дополнительный заработок?")) {
       let itemIncome = validateString(
         "Какой у вас дополнительный заработок",
         " Таксо"
       );
       let cashIncome = validateNumber(
         "Сколько в месяц вы на этом зарабатывайте?",
         10000
       );
       appData.income[itemIncome] = cashIncome;
     }
     for (let key in appData.income){
       appData.incomeMonth += +appData.income[key];
     }
  },

  getExpenses: function() {
    expensesItem.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== ''){
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },

  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if ( item !== ''){
        appData.addExpenses.push(item);
      }
    });
  },

  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if (itemValue !== ''){
        appData.addInncome.push(itemValue);
      }
    });

  },

  // asking: function () {

    // if(confirm('Есть ли у вас дополнительный заработок?')){
    //     let itemIncome = validateString('Какой у вас дополнительный заработок', ' Таксо');
    //     let cashIncome = validateNumber('Сколько в месяц вы на этом зарабатывайте?', 10000);
    //     appData.income[itemIncome] = cashIncome;
    // }

    // let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую: Такси, Аренда, Звонки");
    // appData.addExpenses = addExpenses.toLowerCase().split(',');
    // appData.deposit = confirm("Есть ли у вас депозит в банке"); 
  // },

  // getExpensesMonth: function () {
  //   let expenses = [];
  //   let sum = 0;

  //   for (let i = 0; i < 2; i++) {
  //     expenses[i] = prompt(
  //       " введите обязательную статью расходов",
  //       " Транспорт"
  //     );
  //     do {
  //       sum += prompt(" Во сколько это обойдется?");
  //     } while (!isNumber(sum));
  //   }

  //   return sum;
  // },

  getExpensesMonth: function(){
      appData.expensesMonth = 0;
      for (let elem in appData.expenses){
          appData.expensesMonth += appData.expenses[elem];
      }
  },

  getBudget: function(){
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getAccumulatedMonth: function () {
    return appData.money - appData.expensesMonth;
  },

  getTargetMonth: function () {
     return targetAmount.value / appData.budgetMonth;
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
      return appData.budgetMonth * periodSelect.value;
  },

};


start.addEventListener('click', appData.start);

expensesAdd.addEventListener('click', appData.addExpensesBlock);

// console.log('Расходы за месяц: ', appData.expensesMonth());
// console.log('Уровень дохода: ', appData.getStatusIncome());
// console.log('Наif программа включает в себя данные: ');
// for (let elem in appData){
//     console.log(elem, appData[elem]);
// }
appData.getInfoDeposit();
// console.log(appData.moneyDeposit, appData.percentDeposit, calcSavedMoney());

