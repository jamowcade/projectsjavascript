const ramadan = "22 mar 2023";
const daysEl  = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minsEl = document.querySelector('#mins')
const secondsEl = document.querySelector('#seconds')
  

function ramadan2023(){
    const ramadanDate = new Date(ramadan);
    

    const currenDate = new Date();

    const totalSeconds = (ramadanDate - currenDate) / 1000;
    console.log(totalSeconds)

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerText = days;
    hoursEl.innerText =formatTime(hours);
    minsEl.innerText = formatTime(mins);
    secondsEl.innerText = formatTime(seconds);

}

function formatTime (time){
    return time < 10? `0${time}` : time

}
ramadan2023()

setInterval(ramadan2023, 1000)