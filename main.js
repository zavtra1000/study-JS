
'use strict';

let money = +prompt("Ваш месячный доход?");

let income = 'frilance';
let addExpenses = +prompt("Перечислите возможные расходы за рассчитываемый период через запятую: Такси, Аренда, Звонки");
let deposit = confirm("Есть ли у вас депозит в банке");

let expenses1 = prompt(" введите обязательную статью расходов");

let amount1 = +prompt (" Во сколько это обойдется?");

let expenses2 = prompt(" введите обязательную статью расходов 2");

let amount2 = +prompt (" Во сколько это обойдется? 2");


let mission = 99999999990; 
let period = 7;

console.log(typeof money);
console.log("income: ", income);
console.log("deposit: ", deposit);
console.log(typeof addExpenses);
console.log('период равен ' + period + ' месяцев' );
console.log('Цель заработать ' + mission + ' долларов' );


console.log(typeof expenses1);
console.log(typeof expenses2);
console.log(typeof amount1);
console.log(typeof amount2);


let budgetDay = 1200;
console.log(budgetDay / 30);

let budgetMonth = (expenses1 + expenses2 + amount1 + amount2 + addExpenses);
console.log(budgetMonth);

let target = (mission/budgetMonth);
console.log(Math.round(target);

let target2 = (budgetMonth/30);
console.log(Math.floor(target2);

let condition
if (budgetDay > 1200) {
    console.log(" У вас высокий уровень дохода");
}else if (budgetDay > 600 && budgetDay < 1200) {
    console.log(" У вас средний уровень дохода");
} else if (budgetDay < 600 && budgetDay > 0 ) {
    console.log(" К сожалению у вас уровень дохода ниже среднего");
} else (budgetDay < 0) 
    console.log(" Что то пошло не так");
;








