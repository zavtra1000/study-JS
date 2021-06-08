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

const incomeItems = document.querySelector(".income-items");
console.log("incomeTitle: ", incomeItems.children[0]);
console.log("incomeAmount: ", incomeItems.children[1]);

const expensesItems = document.querySelector(".expenses-items");
console.log("expensesTitle: ", expensesItems.children[0]);
console.log("expensesAmount: ", expensesItems.children[1]);

const additionalExpensesItem = document.querySelector(".additional_expenses-item");
console.log("additionalExpensesItem: ", additionalExpensesItem);

const depositAmount = document.querySelector(".deposit-amount");
console.log("depositAmount: ", depositAmount);

const depositPercent = document.querySelector(".deposit-percent");
console.log("depositPercent: ", depositPercent);

const targetAmount = document.querySelector(".target-amount");
console.log("targetAmount: ", targetAmount);