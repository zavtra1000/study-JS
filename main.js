
'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money,
    income = 'frilance',
    addExpenses = +prompt("Перечислите возможные расходы за рассчитываемый период через запятую: Такси, Аренда, Звонки"),
    deposit = confirm("Есть ли у вас депозит в банке"),
    mission = 99999999990,
    period = 7;

    let start = function(){
        money = prompt (' Ваш месячный доход?');

        while (!isNumber(money)) {
          money = prompt(" Ваш месячный доход?");
        }
    };
    start();


// let showTypeof = function(){
//     console.log(typeof item);
// };

// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);





let expenses = [];

// console.log(addExpenses.toLowerCase().split(','));


let getExpensesMonth = function() {
    let sum = 0;

    for (let i=0; i<2; i++){

        expenses [i] = prompt(" введите обязательную статью расходов", " Транспорт");
            sum += +prompt(' Во сколько это обойдется?');
        do {
            sum += +prompt(' Во сколько это обойдется?');
        } while (!isNumber(sum));
    };
    
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log("Расходы за месяц" + expensesAmount);



let getAccumulatedMonth = function () {
  return money - expensesAmount;
};


let accumulatedMonth = getAccumulatedMonth()


function getTargetMonth() {
  let res = Math.floor(mission / accumulatedMonth);
  if (res > 0) {
    console.log("Цель будет достигнута: " + res + "месяцев");
  } else {
    console.log("Цель не будет достигнута");
  }

  return res;
}
getTargetMonth();


// let targetMission = getTargetMonth();
// console.log('targetMission: ', targetMission);


let budgetDay = accumulatedMonth / 30;



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


let getStatusIncome = function (){
if (budgetDay < 300) {
    return ("У вас низкий уровень дохода");
}else if (budgetDay <= 800) {
    return (" У вас средний уровень дохода");
} else {
    return (" Высокий уровень дохода");
    }
};
console.log(getStatusIncome());


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




