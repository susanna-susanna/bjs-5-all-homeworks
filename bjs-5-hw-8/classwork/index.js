// 1. Создаем запрос
var xhr = new XMLHttpRequest();

// 2. Опрелеяем функцию обратного вызова
xhr.onreadystatechange = processResponse;

// Этот код выполниться кода запрос будет в пути
function processResponse(e) {
  if (xhr.readyState === 4) {
    console.log(xhr.responseText);
  } else {
    console.log('Загружаем ...')
  }
}

// 3. Определяем куда слать запрос
xhr.open('GET', 'employees.json', true);

// 4. Отправляем запрос
xhr.send();

console.log('Другая важная работа ...')

https://repl.it/repls/CourteousPoisedBrace

// Игорь писал на занятии
let count = 0;
function sayDate() {
count++;
console.log(count + new Date().valueOf());
}
const id = setInterval(sayDate, 1000);
function clean() {
if (count > 5) {
clearInterval(id);
}
console.log('clean now..');
}


setInterval(clean, 1000);

/*оптимизация вычислений*/
// вычисляем сумму от 0 до n, по itemsPerStep элементов за раз
const sumStep = (n, itemsPerStep, onload) => {
  const size = Math.ceil(n / itemsPerStep); // количество шагов
  let index = 0; // текущий шаг
  let sum = 0; // сумма вычислений
  // эта функция будет вызываться каждые 500 мс
  return () => {
  // окончание вычислений
  if (index === size) {
  onload(sum);
  return;
  }
  // начальные и конечные значения шага
  const start = index * itemsPerStep;
  const end = Math.min((index + 1) * itemsPerStep, n + 1);
  // сами вычисления
  for (let i = start; i < end; i++){
  sum += i;
  }
  console.log(`Шаг ${index}: ${sum}`);
  index++;
  // планируем новый шаг
  scheduleStep();
  };
  };
  // функция обратного вызова для вывода результата
  const onload = result => console.log(`Результат вычислений: ${result}`);
  // задаем начальные настройки
  const step = sumStep( 1000000, 1000, onload );
  const scheduleStep = () => setTimeout( step, 500);
  scheduleStep()

  // CLASSWORKS
// вычисляем сумму от 0 до n, по itemsPerStep элементов за раз
const sumStep = (n, itemsPerStep, onload) => {
  const size = Math.ceil(n / itemsPerStep); // количество шагов
  let index = 0; // текущий шаг
  let sum = 0; // сумма вычислений
  // эта функция будет вызываться каждые 500 мс
  return () => {
  // окончание вычислений
  if (index === size) {
  onload(sum);
  return;
  } 
  // начальные и конечные значения шага
  const start = index * itemsPerStep;
  const end = Math.min((index + 1) * itemsPerStep, n + 1);
  // сами вычисления
  for (let i = start; i < end; i++){
  sum += i;
  } 
  console.log(`Шаг ${index}: ${sum}`);
  index++;
  // планируем новый шаг
  scheduleStep();
  };
  };
  // функция обратного вызова для вывода результата
  const onload = result => console.log(`Результат вычислений: ${result}`);
  // задаем начальные настройки
  const step = sumStep( 25, 5, onload );
  const scheduleStep = () => setTimeout( step, 500);
  scheduleStep();