"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
       
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0 ) {
       return [];
    } else if (D == 0) {
      let x = -b / 2 * a;
      return x;
    } else if (D > 0) {
      let x1 = (-b + Math.sqrt(D)) / 2 * a;
      let x2 = (-b - Math.sqrt(D)) / 2 * a;
      return x1, x2;
    }
}
getResult(25, 0, -4);


/* Подскажите, пожалуйста, как мне сделать 
эту же функцию со switch case. 
Совершенно не могу разобраться, как пользоваться этой консрукцией(((
  Что я здесь неправильно пишу?? */

/*  function giveResult(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  switch(D){
  case (D < 0):
    alert("Корней нет");
    break;
  case D == 0:
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
giveResult(); */

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

/* Вот так выходило, что младше 1 января 1970 года
предлагал компот
function askDrink(name,dateOfBirthday){
   
    let year = new Date().getFullYear();
    let age = year - dateOfBirthday;
    let result = '';
    if (age <= 18) {
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь.\nЗато могу предложить вам замечательный клюквенный компот!`
      return result;
    } else if (age > 18) {
      result = `Не желаете ли олд-фэшн, ${name}?`
      return result;
    }
}
askDrink("Vasya", 1978); 
*/

//а так все считало хорошо 
function askDrink(name, date){
  let age = Math.round((Date.now() - Number(new Date(date))) / (1000*60*60*24*365.24));
  console.log(Number(new Date(date))); //это я для проверки, правильно ли он видит введенную дату
  if (age <= 18) {
    console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь.\nЗато могу предложить вам замечательный клюквенный компот!`);
    return;
  } else if (age > 18) {
    console.log(`Не желаете ли олд-фэшн, ${name}?`);
    return;
  }
}


askDrink("Vasya", "2001, 8, 22");

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
       
      if (marks.length > 5) {
        console.log("Количество вводимых оценoк больше 5.\nСейчас я дам среднее первых пяти оценок")
        marks.length = 5;
      } 
      let total = 0;
      for (let i = 0; i < marks.length; i++) {
        total += marks[i];
      }

        return total / marks.length;
      
      
}
getAverageMark([4, 5, 4, 5, 5]);

/* Подскажите, пожалуйста, что я делаю не так?
когда я сделала у себя вот так (Пример1) у меня в браузере прекрасно
обрезало лишние цифры и считало только первые пять цифр.

function count(...args) {
      let total = 0;
      let sum = 0;
      for (let i = 0; i < args.length; i++) {
        total += args[i];
      }

      if (args.length > 5) {
        console.log("Количество вводимых оценок больше 5.\nСейчас я дам среднее первых пяти оценок")

        let array = args.slice(0, 5);
        for (let i = 0; i < array.length; i++) {
        sum += array[i];
      } 
      
      return sum / array.length;
    }
  }
    count(5, 4, 3, 10, 2, 18, 7, 4);  

    А когда я сделала вот так, то считало только цифры, количество 
    которых меньше пяти, и не могло срезать и посчитать 
    (а может что-то другое делала или не делала - не знаю)
    
    function count(...args) {
      let total = 0;
      let sum = 0;
      for (let i = 0; i < args.length; i++) {
        total += args[i];
      }

      if (args.length > 5) {
        console.log("Количество вводимых оценок больше 5.\nСейчас я дам среднее первых пяти оценок")
        let array = args.slice(0, 5);
        for (let j = 0; j < array.length; j++) {
        sum += array[j];
        return sum / array.length;
        } 
      } else {
        return total / args.length;
      }
    }
    count(5, 4);
    */

   "use strict"

   // 2x^2 + 4x - 3=0
   // ax^2 + bx + c = 0
   function getResult(a, b, c){
     // b2 - 4ac
     let d = b**2 + 4 * a * c;
     if (d > 0) {
       let x1 = (Math.sqrt(d) - b) / (2 * a);
       let x2 = (Math.sqrt(d) + b) / (-2 * a);
       console.log('x1 = '+x1+'   x2 = '+x2);
     } else if (d == 0) {
       x1 = b/(-2*a);
       console.log('x = '+x1);
     } else {
       console.log('Решений нет, так как дискриминант меньше нуля.');
     }
   }
   let a = 3;
   let b = 0;
   let c = 48;
   getResult(a, b, c);
   
   
   function getAverageMark(marks){
   if (marks.length > 5) {
     console.log('количество оценок больше пяти');
     do {
       marks.pop()
     } while (marks.length > 5);
   }
   
    let sum = 0;
   for (let i = 0; i < marks.length; i++) {
     sum += marks[i];
   }
   
    let averageMark = sum / marks.length;
   
    return averageMark
   }
