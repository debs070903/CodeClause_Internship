let interval;

window.onload = () => {
  document.querySelector("#start").onclick = start;
  document.querySelector("#reset").onclick = reset;
  const stime = localStorage.getItem("endTime");
  if (stime) {
    const endTime = new Date(stime);
    startcountdown(endTime);
  }
};

function start() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const endTime = new Date(date + " " + time);
  localStorage.setItem("endTime", endTime);
  startcountdown(endTime);
}

function startcountdown(endTime) {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => calculateTime(endTime), 1000);
}

function calculateTime(endTime) {
  const currentTime = new Date();
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const mins = document.getElementById("mins");
  const secs = document.getElementById("secs");
  if (endTime > currentTime) {
    const timeLeft = (endTime - currentTime) / 1000;
    days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
    hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
    mins.innerText = Math.floor((timeLeft / 60) % 60);
    secs.innerText = Math.floor(timeLeft % 60);
  } else {
    days.innerText = 0;
    hours.innerText = 0;
    mins.innerText = 0;
    secs.innerText = 0;
    playSound();
  }
}

function playSound() {
  const audio = new Audio('notification.mp3'); 
  audio.play();
}

function reset() {
  clearInterval(interval);
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const mins = document.getElementById("mins");
  const secs = document.getElementById("secs");
  days.innerText = 0;
  hours.innerText = 0;
  mins.innerText = 0;
  secs.innerText = 0;
  localStorage.removeItem("endTime");
  document.getElementById("date").value= "";
  document.getElementById("time").value= "";
}
