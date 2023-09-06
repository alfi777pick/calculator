// // 1) function +
// // 2)function -
// // 3)function /
// // 4)function *
// // 5)function equal whos return value at -, +, /, * and added this value on display
// // function setNumOnDisp() при нажатии на кнопки с классом container__button добавляет их value  на экран
// // let calc = document.querySelector('.container');
// // let display = document.querySelector('.container__display');
// // let numbers = document.querySelectorAll('.container__button');


// // calc.addEventListener('click', function (event) {
// //    let value = event.target.innerText;
// //   console.log(value);
// //     if (event.target.classList.contains(!'container__button')) {
// //       return ;
// //     } else {
// //       display.innerHTML += value;
      
// //     }

// //   });


// // main();
// // function operations(operator) {
    
// //     switch (operator) {
// //       case '-':
// //         return value - valu;
// //       case '+':
// //         return value + value;
// //       case '/':
// //         return value / value;
// //       case '*':
// //         return value * value;
// //     }
// //     }
// let buttons = document.querySelector('.calculator__buttons');
// let display = document.querySelector('.calculator__display');


// buttons.addEventListener('click', function (event) {
//   // console.log(event.target);
//   // if (event.target.classList.contains('container__button')) {
//   //   display.innerHTML = event.target.innerText;
//   // };
//     let value = event.target.innerText;

//     switch(value) {
//       case 'C':
//         display.innerHTML = '';
//         break;
      
//       case '=':
//         if (display.innerHTML.search(/[^0-9*/+.-]/mi) != -1) return;
//         display.innerHTML = eval(display.innerText).toFixed(2);
//         break;
        
//       default:
//         display.innerHTML += value;
//       }
//     });
    
// // надо ограничить выпадание цыфр за пределы дисплея и убрать баг при нажатии на дисплей повторение той цыфры которая там отображена!!!


let a = "";
let b = "";
let sign = "";
let finish = false;
let  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let  actions = ['-', '+', '/', '*'];

let display = document.querySelector('.calculator__display');
// функция очистки дисплея при нажатии кнопки clearAll 
//которая вконце добавляет стартовое значение экрана равное = 0;
function clearAll () {
a = "";
b = "";
sign = "";
finish = false;
display.textContent = '0';
}
//логика нажатой кнопки очистки с использованием функции
document.querySelector('.calculator__button-reset').onclick = clearAll;
// если попали не в кнопку
document.querySelector('.calculator__buttons').onclick = (event) => {
if (!event.target.classList.contains('calculator__button')) return;

if (event.target.classList.contains('calculator__button-reset')) return;// эта команда уже обработана выше

display.textContent = '';
let button = event.target.textContent;
//display.textContent += event.target.textContent;

if (numbers.includes(button)) {
  if (b === "" && sign === "") {
  a += button;
  display.textContent = a;
  } else if (a !== '' && b !== '' && finish) {
    b = button;
    finish = false;
    display.textContent = a;
  } else {
    b += button;
    display.textContent = b;
  }
  return;
}

// если нажата клавиша операторов
if (actions.includes(button)) {
  //sign = key;
  sign = button;
  display.textContent = sign;
  return;
} 
// нажата клавиша равно 
if (button === '=') {
  switch(sign) {
    case '+':
      a = Number(a) + Number(b);
      break;
    case '-':
      a -= b;
      break;
    case '*':
      a *= b;
      break;
    case '/':
      a = a / b;
      break;
  }
  finish = true;
  display.textContent = a;
}

}