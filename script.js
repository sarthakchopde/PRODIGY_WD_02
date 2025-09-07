
let hour = 0, minute = 0, second = 0, count = 0;
let timer = false;

document.getElementById('start').onclick = function() {
  timer = true;
  stopWatch();
};
document.getElementById('stop').onclick = function() {
  timer = false;
};
document.getElementById('reset').onclick = function() {
  timer = false;
  hour = 0; minute = 0; second = 0; count = 0;
  document.getElementById('hour').innerHTML = "00";
  document.getElementById('minute').innerHTML = "00";
  document.getElementById('second').innerHTML = "00";
  document.getElementById('count').innerHTML = "00";
};

function stopWatch() {
  if (timer) {
    count++;
    if (count == 100) {
      second++; count = 0;
    }
    if (second == 60) {
      minute++; second = 0;
    }
    if (minute == 60) {
      hour++; minute = 0; second = 0;
    }
    let hrStr = hour < 10 ? "0" + hour : hour;
    let minStr = minute < 10 ? "0" + minute : minute;
    let secStr = second < 10 ? "0" + second : second;
    let countStr = count < 10 ? "0" + count : count;

    document.getElementById('hour').innerHTML = hrStr;
    document.getElementById('minute').innerHTML = minStr;
    document.getElementById('second').innerHTML = secStr;
    document.getElementById('count').innerHTML = countStr;

    setTimeout(stopWatch, 10);
  }
}
