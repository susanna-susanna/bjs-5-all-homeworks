"use strict"
//TASK 1

function getResult(a, b, c){
    
  let D = Math.pow(b, 2) - 4 * a * c;
 
  if (D < 0 ) {
    return {
      D: D
    };
  } else if (D == 0) {
    let x = -b / 2 * a;
    return {
      D: D,
      roots: [x]
    };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / 2 * a;
    let x2 = (-b - Math.sqrt(D)) / 2 * a;
    return {
      D: D,
      roots: [x1, x2]
    };
  }
}


function showSolutionsMessage(a, b, c) {
  let result = getResult(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
  console.log("Значение дискриминанта: " + result.D);

  if (result.D < 0) {
    return console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D == 0) {
    let x = -b / 2 * a;
    return console.log(`Уравнение имеет один корень  X₁ = ${x}`);
  } else if (result.D > 0) {
    let x1 = (-b + Math.sqrt(result.D)) / 2 * a;
    let x2 = (-b - Math.sqrt(result.D)) / 2 * a;
    return console.log(`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`);
  }
}
showSolutionsMessage(25, 0, -4);


//TASK 2

function count(data) {
  let total = 0;
  for (var key in data) {
    let sum = 0, result = 0;
    for (let i = 0; i < data[key].length; i++) {
      sum += data[key][i];
      result = sum / data[key].length;
    }
    console.log(`${key}: ${result}`);
    total += result;
  }
  return total;
}

function getAverageScore( data ) {
  let newResult = count(data);
  let cnt = 0;
  for (var key in data) {
    cnt += 1;
  }
  return 'average: ' + newResult / cnt;
}
console.log(getAverageScore({
  lesson1: [1, 2, 3, 4, 5],
  lesson2: [1, 2, 3, 4],
  lesson3: [1, 2, 3]
  }));


//TASK 3

function retriveName(secretData) {
  for (var key in secretData) {
    if (key == 'aaa') {
      return key = 'firstName: ';
    } else if (key == 'bbb') {
       return key = 'lastName: ';
    }
  }
}
function getPersonData( secretData ) {
  let personDate = retriveName(secretData);
  for (var key in secretData) {
    if (secretData[key] == 1) {
      secretData[key] = 'Emilio';
    } else if (secretData[key] == 0) {
       secretData[key] ='Rodrigo';
    }
  }
return `${personDate} ${secretData[key]}, ${personDate} ${secretData[key]}`;
}


/*function retriveName(secretData) {
  for (var key in secretData) {
    if (key === 'aaa') {
      console.log('firstName: ');
    } else if (key === 'bbb') {
      console.log('lastName: ');
    }
  }
}
function getPersonData( secretData ) {
  let personDate = retriveName(secretData);
  for (var key in secretData) {
    if (secretData[key] === 1) {
      console.log('Emilio');
    } else if (secretData[key] === 0) {
      console.log('Rodrigo');
    }
  }
}*/

    /*function retriveName(secretData) {
      for (var key in secretData) {
        if (key === 'aaa') {
          return key ='firstName';
        } else if (key === 'bbb') {
          return key = 'lastName';
        }
      }
    }

      function getPersonData( secretData ) {
      let personDate = retriveName(secretData);
      for (var key in secretData) {
        if (secretData[key] === 1) {
          secretData[key] = 'Emilio';
        } else if (secretData[key] === 0) {
          secretData[key] = 'Rodrigo';
        }
      }
      console.log({personDate: secretData[key]});
    }
     */ 
    
    getPersonData({
    aaa: 1,
    bbb: 0
    });
