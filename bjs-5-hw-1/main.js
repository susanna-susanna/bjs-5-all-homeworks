"use strict";

//     Задача 1

function getResult(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0 ) 
  console.log("Корней нет");
  else if (D == 0) {
    let x = -b / 2 * a;
  return x;
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / 2 * a;
    let x2 = (-b - Math.sqrt(D)) / 2 * a;
    return [x1, x2];
  }
}
getResult();


/* Подскажите, пожалуйста, как мне сделать 
эту же функцию со switch case. 
Совершенно не могу разобраться, как пользоваться этой консрукцией(((
  Что я здесь неправильно пишу?? */
function giveResult(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  switch(D){
  case (D < 0):
    alert("Корней нет");
    break;
  case 0:
    let x = -b / 2 * a;
    alert("x = " + x);
    break;    
  case D > 0 :
    let x1 = (-b + Math.sqrt(D)) / 2 * a;
    let x2 = (-b - Math.sqrt(D)) / 2 * a;
    let roots = [x1, x2];
    alert("Корни уравнения: " + roots);
  default:
    alert("Я такого не умею");  
  }
}
giveResult();

//  Задача 2

function getAverageMark([marks]){
  let marks = [];
  let size = 5;
  let sum = 0;
  let j = 0;
  for (let i=0; i<size; i++) {
    marks[i] = "";
  }
  for (mark of marks) {
    sum += mark;
    j++;
  }
  console.log(sum/j);


}
getAverageMark();



