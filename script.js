var info = document.getElementsByClassName("count-info")[0];
var i = 60;
document.getElementById("counter").setAttribute("style", "display:none");

var time, _value_day, _value_hour, _value_min, _value_sec;
var run = () => {
  document.getElementById("panel").setAttribute("style", "display:none");
  document.getElementById("counter").setAttribute("style", "display:block");

  _value_day = document.getElementsByClassName("day")[0];
  _value_hour = document.getElementsByClassName("hour")[0];
  _value_min = document.getElementsByClassName("min")[0];
  _value_sec = document.getElementsByClassName("sec")[0];

  var sum =
    Number(_value_sec.value) +
    Number(_value_min.value) * 60 +
    Number(_value_hour.value) * 3600 +
    Number(_value_day.value) * 86400;

  var dk = 60;
  var st = dk * 60;
  var gn = st * 24;
  var ay = gn * 30;

  time = setInterval(() => {
    var day = Math.floor((sum % ay) / gn);
    var hour = Math.floor((sum % gn) / st);
    var min = Math.floor((sum % st) / dk);
    var sec = Math.floor(sum % dk);

    var daye = day < 10 ? `0${day}` : day;
    var houre = hour < 10 ? `0${hour}` : hour;
    var mine = min < 10 ? `0${min}` : min;
    var sece = sec < 10 ? `0${sec}` : sec;

    info.innerHTML = `${daye}:${houre}:${mine}:${sece}`;
    sec--;
    sum--;
    if (-1 == sum) {
      clearInterval(time);
      info.innerHTML = "00:00:00:00";
      _value_day.value = "00";
      _value_hour.value = "00";
      _value_min.value = "00";
      _value_sec.value = "00";
      document.getElementById("panel").setAttribute("style", "display:block");
      document.getElementById("counter").setAttribute("style", "display:none");
    }
  }, 1000);
};

document.getElementById("run").onclick = () => run();
document.getElementById("reset").onclick = () => {
  clearInterval(time);
  info.innerHTML = "00:00:00:00";
  _value_day.value = "00";
  _value_hour.value = "00";
  _value_min.value = "00";
  _value_sec.value = "00";
  document.getElementById("panel").setAttribute("style", "display:block");
  document.getElementById("counter").setAttribute("style", "display:none");
};