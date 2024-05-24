window.onload = () => {
  document.querySelector('#calculate').onclick = calculate;
  document.querySelector('#reset').onclick = reset;
}
let countdownDate = null;
let countdownInterval = null;
let timeRemaining = 0;
let isPaused = false;

function calculate () {
  const date = document.querySelector("#date").value;
  // const time = document.querySelector("#time").value;

  let time = document.querySelector("#time").value;

  // If no time is provided, set it to midnight
  if (time === "") {
    time = "00:00";
  }

  const pause = document.querySelector('#pause');
  const resume = document.querySelector('#resume');
  
  const endTime = new Date(date + " " + time);

  if (!countdownInterval || isPaused) {
    countdownInterval = setInterval(() => calculateTime(endTime), 1000);
    isPaused = false;
  }

  pause.addEventListener('click', () => {
      clearInterval(countdownInterval);
      isPaused = true;
  });

  resume.addEventListener('click', () => {
      if (isPaused) {
          countdownInterval = setInterval(() => calculateTime(endTime), 1000);
          isPaused = false;
      }
  });
}

function calculateTime(endTime) {
  const currentTime = new Date();

  const days = document.querySelector('#countdown-days');
  const hours = document.querySelector('#countdown-hours');
  const minutes = document.querySelector('#countdown-minutes');
  const seconds = document.querySelector('#countdown-seconds');

  if (endTime > currentTime) {
      const timeLeft = (endTime - currentTime) / 1000;

      console.log(timeLeft);
      days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
      hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
      minutes.innerText = Math.floor((timeLeft / 60) % 60);
      seconds.innerText = Math.floor(timeLeft % 60);
  } else {
      days.innerText = 0
      hours.innerText = 0
      minutes.innerText = 0
      seconds.innerText = 0
      clearInterval(countdownInterval)
  }
}

function reset() {
  clearInterval(countdownInterval);
  countdownInterval = null;
  document.querySelector('#countdown-days').innerText = 0;
  document.querySelector('#countdown-hours').innerText = 0;
  document.querySelector('#countdown-minutes').innerText = 0;
  document.querySelector('#countdown-seconds').innerText = 0;
  isPaused = false;
}
























































// window.onload = () => {
//   document.querySelector('#calculate').onclick = calculate;
//   document.querySelector('#reset').onclick = reset;
// }

// function calculate () {
//   const date = document.querySelector("#date").value;
//   const time = document.querySelector("#time").value;

//   const pause = document.querySelector('#pause');
  
//   const endTime = new Date(date + " " + time);

//   const interval = setInterval(() => calculateTime(endTime), 1000);

//   pause.addEventListener('click', () => {
//       clearInterval(interval);
//   })
// }

// function calculateTime(endTime) {
//   const currentTime = new Date();

//   const days = document.querySelector('#countdown-days');
//   const hours = document.querySelector('#countdown-hours');
//   const minutes = document.querySelector('#countdown-minutes');
//   const seconds = document.querySelector('#countdown-seconds');

//   if (endTime > currentTime) {
//       const timeLeft = (endTime - currentTime) / 1000;

//       console.log(timeLeft);
//       days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
//       hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
//       minutes.innerText = Math.floor((timeLeft / 60) % 60);
//       seconds.innerText = Math.floor(timeLeft % 60);
//   } else {
//       days.innerText = 0
//       hours.innerText = 0
//       minutes.innerText = 0
//       seconds.innerText = 0
//   }
// }

// function reset() {
//   document.querySelector('#countdown-days').innerText = 0;
//   document.querySelector('#countdown-hours').innerText = 0;
//   document.querySelector('#countdown-minutes').innerText = 0;
//   document.querySelector('#countdown-seconds').innerText = 0;
// }



