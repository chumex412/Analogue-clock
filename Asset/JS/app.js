// UI elements
const clock = document.querySelector('.clock'),
      hour = document.querySelector('.hour'),
      minute = document.querySelector('.minute'),
      second = document.querySelector('.second'),
      dayInfo = document.querySelector('.day'),
      currentDate = document.querySelector('.date');
// Time factors
let transformAngle = 6;
let rotateAngle = 360;
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let monthDate = now.getDate();
let day = now.getDay();

function showClockpoints() {
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  for(let i = 0; i < 60; i++) {
    // Create clock pointer
    const pointer = document.createElement('div');
    // Add class
    pointer.className = 'clock-point';
    pointer.style.transform = "rotate(" + transformAngle * i + "deg)";
    // Append to parent
    clock.appendChild(pointer);
  }
  // Show current date
  currentDate.innerHTML = `${monthDate} / ${month + 1} / ${year}`;
  // Show current day
  for(let i = 0; i < days.length; i++) {
    dayInfo.innerHTML = days[day];
  };
}

showClockpoints();

function setClock() {
  let date = new Date();
  let s = date.getSeconds() / 60;
  let m = (s + date.getMinutes()) / 60;
  let h = (m + date.getHours()) / 12;

  rotateClock(hour, h * rotateAngle);
  rotateClock(minute, m * rotateAngle);
  rotateClock(second, s * rotateAngle);
}

function rotateClock(hand, angle) {
  hand.style.transform = 'rotate(' + angle + 'deg)';
}

setInterval(setClock, 1000);
setClock();