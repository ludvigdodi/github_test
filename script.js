'use strict';

// alert('hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt('Are you 18?', '');
// console.log(answer); // рез=тат всегда строка
// console.log(typeof(answer)); // проверка что строка

// const answer = +prompt('Are you 18?', ''); // если поставить +, то рез-тат число а не строка
// console.log(answer  + 6);

const answers = [];

answers[0] = prompt('Your name', '');
answers[1] = prompt('Your last name', '');
answers[2] = prompt('Your ge', '');

document.write(answers);