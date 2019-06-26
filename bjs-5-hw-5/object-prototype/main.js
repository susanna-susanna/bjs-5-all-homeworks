function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}


function checkBirthday(name, birthday) {
    // код для задачи №1 писать здесь
    let age = Math.round((Date.now() - Number(new Date(birthday))) / (1000*60*60*24*365.24));
        
    if (age < 18) {
        console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь.\nЗато могу предложить вам замечательный клюквенный компот!`);
        return;
    } else if (age >= 18) {
        console.log(`Не желаете ли олд-фэшн, ${name}?`);
        return;
    }
}
checkBirthday("Vasya", "2001, 8, 22");

/*
function checkBirthday(birthday) {
    // код для задачи №1 писать здесь
    let age = Math.round((Date.now() - Number(new Date(birthday))) / (1000*60*60*24*365.24));
        
    if (age < 18) {
        return 'NO';
    } else if (age >= 18) {
        return 'YES';
    }
}
checkBirthday(birthday);
*/


function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    let sound = animal.sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}


function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    
        let sum = 0, average = 0;
        for (i = 0; i < marks.length; i++) {
        sum += marks[i];
        }
        average = sum / marks.length;
        
        return Math.round(average);
}
//getAverageMark([4, 5, 4, 4, 3, 2, 5, 5]);
getAverageMark(marks);


