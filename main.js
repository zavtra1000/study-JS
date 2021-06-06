
'use strict';

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
  budgetMonth : 0,
  expensesMonth: 0,
  asking: function(){
    let addExpenses = +prompt("Перечислите возможные расходы за рассчитываемый период через запятую: Такси, Аренда, Звонки");
        // appData.addExpenses = addExpenses.toLowerCase().split(',');  
        appData.deposit = confirm("Есть ли у вас депозит в банке")
  },

getExpensesMonth: function() {
      
        let expenses = []
        
        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt(" введите обязательную статью расходов", " Транспорт");
            let sum = 0;
            do {
                sum += +prompt(" Во сколько это обойдется?");
            } while (!isNumber(sum));
        }
        
        return sum;
        
},


appData.budgetDay = appData.accumulatedMonth / 30;

getAccumulatedMonth: function() {
  return appData.money - appData.expensesMonth;
},
console.log("Расходы за месяц" + appData.expensesMonth);
  
      function getTargetMonth() {
  let res = Math.floor(appData.mission / appData.accumulatedMonth);
  if (res > 0) {
    console.log("Цель будет достигнута: " + res + "месяцев");
  } else {
    console.log("Цель не будет достигнута");
  }
  return res;
},
  
    let getStatusIncome = function (){
if (appData.budgetDay < 300) {
    return ("У вас низкий уровень дохода");
}else if (appData.budgetDay <= 800) {
    return (" У вас средний уровень дохода");
} else {
    return (" Высокий уровень дохода");
    }
    console.log(getStatusIncome());
  }


appData.asking();
appData.getExpensesMonth();
appData.getAccumulatedMonth();
appData.getTargetMonth();






// let showTypeof = function(){
//     console.log(typeof item);
// };

// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);















// let targetMission = getTargetMonth();
// console.log('targetMission: ', targetMission);





// const showTypeOf = function(data){
//     console.log(data, typeof (data));
// };

// console.log("getExpensesMonth: ", getExpensesMonth);
// console.log('addExpenses: ', addExpenses);
// console.log("getTargetMonth: ", getTargetMonth);
// console.log("budgetDay: ", budgetDay);





// let budgetDay = 1200;
// console.log(budgetDay / 30);

// let getTargetMonth = (mission/budgetMonth);


// console.log("за сколько месяцев будет достигнута цель: ", +  Math.celi(getTargetMonth()));

// let budgetDay = Math.floor(accumulatedMonth / 30);





// моя функция

// let getStatusIncome = function () {
//   if (budgetDay >= 1200) {
//     return "У вас высокий уровень дохода";
//   } else if (budgetDay >= 600 && budgetDay < 1200) {
//     return " У вас средний уровень дохода";
//   } else if (budgetDay < 600 && budgetDay > 0) {
//     return " К сожалению у вас уровень дохода ниже среднего";
//   } else budgetDay <= 0;
//   return " Что то пошло не так";
// };




