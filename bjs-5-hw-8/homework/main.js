
const setDailyRhythm = (wakeUpTime, bedTime) => {
  setInterval(function() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    let now = `${hours}:${minutes}`;
    let morningAlarm = setAlarm(wakeUpTime, sayGoodMorning);
    let nightAlarm = setAlarm(bedTime, sayGoodNight);
    
    console.log(now);
    morningAlarm(now);
    nightAlarm(now);
    
  }, 1000); 
}
 
const setAlarm = (time, callback) => {
  return function(now) {
    if (now === time){
      callback();
    }
  }
}
let sayGoodMorning = () => alert('Доброе утро, Вася');
let sayGoodNight = () => alert('Спокойной ночи, Вася!');

setDailyRhythm('07:00', '23:00');
  