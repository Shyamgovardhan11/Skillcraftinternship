let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = time % 1000;

  document.getElementById("display").textContent =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}:` +
    `${String(milliseconds).padStart(3, '0')}`;
}

function startTimer() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 10);
  }
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime += Date.now() - startTime;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = 0;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:000";
}
