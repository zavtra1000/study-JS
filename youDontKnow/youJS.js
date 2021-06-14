'use strict'

// const getList = document.querySelectorAll('ul'),
//     getChapter = document.querySelectorAll(".chapter");
    
// console.log('getChapter: ', getChapter);
// console.log('getList: ', getList);

const getBook = document.querySelectorAll('.book');
getBook[0].before(getBook[1]);
getBook[3].before(getBook[4]);
getBook[5].before(getBook[2]);
getBook[5].after(getBook[2]);
console.log(getBook);


const getBody = document.querySelector('body');
function getBodyImg () {
    getBody.style.backgroundImage = "url('image/you-dont-know-js.jpg')";
}
getBodyImg();
console.log('getBody: ', getBody);

const removeAdv = document.querySelector('.adv');
removeAdv.classList.remove('adv');
console.log('removeAdv: ', removeAdv);

const fixTitle = document.querySelectorAll('h2');
fixTitle[2].textContent = "Книга 3. this и Прототипы Объектов";
fixTitle[2].style.color = "darkkhaki";
console.log('fixTitle: ', fixTitle);

const getTitle = document.querySelectorAll('li')
getTitle[16].after(getTitle[8]);
getTitle[11].after(getTitle[10]);
getTitle[9].after(getTitle[12]);
getTitle[9].after(getTitle[12]);
getTitle[12].after(getTitle[14]);
getTitle[11].before(getTitle[10]);
getTitle[16].before(getTitle[8]);

getTitle[37].after(getTitle[45]);
getTitle[39].before(getTitle[45]);
getTitle[40].after(getTitle[38]);
getTitle[41].after(getTitle[44]);
getTitle[38].after(getTitle[42]);
getTitle[42].after(getTitle[43]);

console.log('getTitle: ', getTitle);

const fixTitleSix = document.createElem("li");
book[5].append(li);
fixTitleSix[57].textContent = "Глава 8: За пределами ES6";

console.log("fixTitle: ", fixTitle);








