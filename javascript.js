


let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
    
let game = function() {
    let gNum = getRandomInt(100);
}

let guessTheNumber = function() {
    let guessNumber = prompt((' Угадай число от 1 до 100')
    if (guessNumber === null ) {
        alert ('Игра окончена');
        return;
    } if (isNumber(guessNumber)) {
        let guessNum = +guessNumber;
        if (guessNum > gNum) {
            alert(' Загаданное число меньше')
            guessTheNumber();
        } else if (guessNum < gNum) {
            alert(' Загаданное число больше')
            guessTheNumber();
        } else {
            if (confirm ('Поздравляю, вы угадали')) {
                game();
            } else {
                alert (' До свиданья');
                return;
            }
        }
    } else {
        alert ('Введите число');
        guessTheNumber()
    }
};
guessTheNumber();
};
game();


//  let input, number, random = Math.floor(Math.random() * 1000);
 
//         while ((input = prompt("Загадано число от 0 до 999. Попробуйте угадать!")) !== null) {
//             if ((number = +input) !== parseFloat(input) || !Number.isFinite(number))
//                 alert("Введите число!");
//             else if (number > random)
//                 alert("Меньше!");
//             else if (number < random)
//                 alert("Больше!");
//             else if (number == random) {
//                 alert("Правильно!");
//                 break;
//             }
//         }