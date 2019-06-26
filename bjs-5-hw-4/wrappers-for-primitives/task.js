function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  //return totalAmount;
  let P = 1/100/12* percent;
  date = (new Date(date).getTime() - Date.now()) / (1000*60*60*24*30);
  return ((amount - contribution) * (P + P/(((1+P)**date)-1))) * date;
}
calculateTotalMortgage(10, 0, 20000, date);

function sayHello() {
   let name = window.personName.value;
   let greeting = getGreeting(name);
   let span = window.helloResult;
   span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
  let greeting = 'Привет, мир! Меня зовут ';
  if (Boolean(name) === false || name === null || name == undefined) {
    name = 'Аноним';
    return greeting + name;
  } else {
    return greeting + name;
  }
}
getGreeting("");
