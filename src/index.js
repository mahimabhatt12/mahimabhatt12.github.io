//Declared and initialized the three button variables with their respective element values.
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

//Declared and initialized the time variables with initial value as 0.
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

//Declared and initialized the timer variable that provides the information whether the countdown is on or off.
let timer = false;

//Added the addEventListener() method attached to the onclick event handling START BUTTON
startBtn.addEventListener("click", function () {
  timer = true;
  stopBtn.classList.remove("activeBtn");
  resetBtn.classList.remove("activeBtn");
  startBtn.classList.add("activeBtn");
  stopWatchActionFunction();
});

//Added the addEventListener() method attached to the onclick event handling STOP BUTTON
stopBtn.addEventListener("click", function () {
  timer = false;
  stopBtn.classList.add("activeBtn");
  resetBtn.classList.remove("activeBtn");
  startBtn.classList.remove("activeBtn");
});

//Added the addEventListener() method attached to the onclick event handling RESET BUTTON
resetBtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  stopBtn.classList.remove("activeBtn");
  resetBtn.classList.add("activeBtn");
  startBtn.classList.remove("activeBtn");
  document.getElementById("countdown-hours").innerHTML = "00";
  document.getElementById("countdown-minutes").innerHTML = "00";
  document.getElementById("countdown-seconds").innerHTML = "00";
  document.getElementById("countdown-millisecond").innerHTML = "00";
  startBtn.innerHTML = "Start";
});

//This function does all the logical part for stopWatch functioning
function stopWatchActionFunction() {
  //If timer === true then the stopwatch works, else not
  if (timer) {
    startBtn.innerHTML = "Resume";
    millisecond++;

    //If millisecond variable reaches 100 that indicates a second so the second variable is incremented by 1 and millisecond variable is again set to 0.
    if (millisecond === 100) {
      second++;
      millisecond = 0;
    }

    //If second variable reaches 60 that indicates a minute so the minute variable is incremented by 1 and second variable is again set to 0
    if (second === 60) {
      minute++;
      second = 0;
    }

    //If minute variable reaches 60 that indicates an hour so the hour variable is incremented by 1 and minute variable is again set to 0
    if (minute === 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    //Declared and initialized the variables that will be used to store the string values for all three time elements.
    let hrString = hour;
    let minString = minute;
    let secString = second;
    let millisecondString = millisecond;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    if (millisecond < 10) {
      millisecondString = "0" + millisecondString;
    }

    document.getElementById("countdown-hours").innerHTML = hrString;
    document.getElementById("countdown-minutes").innerHTML = minString;
    document.getElementById("countdown-seconds").innerHTML = secString;
    document.getElementById("countdown-millisecond").innerHTML = millisecondString;

    //Adding a setTimeout() function at the end to run the function execution after every 10 milliseconds.
    setTimeout(stopWatchActionFunction, 10);
  }
}