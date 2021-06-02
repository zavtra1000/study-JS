
'use strict';

let money = +prompt("Ваш месячный доход?");

let income = 'frilance';
let addExpenses = +prompt("Перечислите возможные расходы за рассчитываемый период через запятую: Такси, Аренда, Звонки");
let deposit = confirm("Есть ли у вас депозит в банке");

let mission = 99999999990; 
let period = 7;

// console.log(money);
// console.log("income: ", income);
// console.log("deposit: ", deposit);
// console.log(addExpenses);
// console.log('период равен ' + period + ' месяцев' );
// console.log('Цель заработать ' + mission + ' долларов' );

// console.log(expenses1);
// console.log(expenses2);
// console.log(amount1);
// console.log(amount2);

let showTypeof = function(item){
    console.log(typeof item);
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1 = prompt(" введите обязательную статью расходов"),
    amount1 = +prompt (" Во сколько это обойдется?"),
    expenses2 = prompt(" введите обязательную статью расходов 2"),
    amount2 = +prompt (" Во сколько это обойдется? 2");

console.log(addExpenses.toLowerCase().split(','));


let getExpensesMonth = function(expenses1, expenses2, amount1, amount2, addExpenses) {
  const budgetMonth = expenses1 + expenses2 + amount1 + amount2 + addExpenses;
  return budgetMonth;
};
console.log(getExpensesMonth);

// 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

const getAccumulatedMonth = function (budgetDay, budgetMonth) {
  return budgetDay - budgetMonth;
};
// 3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth()
console.log('accumulatedMonth: ', accumulatedMonth);

// 4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат

const getTargetMonth = function () {
    return accumulatedMonth / mission;
};
let targetMission = getTargetMonth();
console.log('targetMission: ', targetMission);

// 5) Удалить из кода переменную budgetMonth

// 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
const budgetDay = accumulatedMonth / 30;

const showTypeOf = function(data){
    console.log(data, typeof (data));
};

// 7)


console.log("getExpensesMonth: ", getExpensesMonth);
console.log('addExpenses: ', addExpenses);
console.log("getTargetMonth: ", getTargetMonth);
console.log("budgetDay: ", budgetDay);





// let budgetDay = 1200;
// console.log(budgetDay / 30);




let getTargetMonth = (mission/budgetMonth);
console.log("за сколько месяцев будет достигнута цель: ", Math.celi(target));

let budgetDay = Math.floor(accumulatedMonth / 30);


let getStatusIncome = function (){
if (budgetDay >= 1200) {
    return ("У вас высокий уровень дохода");
}else if (budgetDay >= 600 && budgetDay < 1200) {
    return (" У вас средний уровень дохода");
} else if (budgetDay < 600 && budgetDay > 0 ) {
    return (" К сожалению у вас уровень дохода ниже среднего");
} else (budgetDay <= 0) 
    return (" Что то пошло не так");
};
console.log(getStatusIncome());








