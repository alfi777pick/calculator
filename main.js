// 1) function +
// 2)function -
// 3)function /
// 4)function *
// 5)function equal whos return value at -, +, /, * and added this value on display
// function setNumOnDisp() при нажатии на кнопки с классом container__button добавляет их value  на экран
// let calc = document.querySelector('.container');
// let display = document.querySelector('.container__display');
// let numbers = document.querySelectorAll('.container__button');


// calc.addEventListener('click', function (event) {
//    let value = event.target.innerText;
//   console.log(value);
//     if (event.target.classList.contains(!'container__button')) {
//       return ;
//     } else {
//       display.innerHTML += value;
      
//     }

//   });


// main();
// function operations(operator) {
    
//     switch (operator) {
//       case '-':
//         return value - valu;
//       case '+':
//         return value + value;
//       case '/':
//         return value / value;
//       case '*':
//         return value * value;
//     }
//     }
let calc = document.querySelector('.container');
let display = document.querySelector('.container__display');


calc.addEventListener('click', function (event) {
  // console.log(event.target);
  if (event.target.classList.contains(!'container__button')) return;

    let value = event.target.innerText;

    switch(value) {
      case 'C':
        display.innerHTML = '';
        break;
      
      case '=':
        if (display.innerHTML.search(/[^0-9*/+.]/mi) != -1) return;
        display.innerHTML = eval(display.innerText); //.toFixed(2)
        break;
      
      default:
        display.innerHTML += value;
    }
    });
    
// надо ограничить выпадание цыфр за пределы дисплея и убрать баг при нажатии на дисплей повторение той цыфры которая там отображена!!!


