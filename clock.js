// My clock version
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var ms = time.getMilliseconds();
  var milSecond = (time.getMilliseconds())/10;
  var scoreLow = Math.abs(milSecond);
  if (scoreLow < 5 || milSecond > 95) {
    result = 'Great!';
  } else if (scoreLow < 15 || milSecond > 85) {
    result = 'Good';
  } else {
    result = 'Bad';
  }
  var temp = hour;

  temp += ((minute < 10) ? ':0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  temp += "." + ms + " " + milSecond + "%<br>" + result;
  return temp;
}

module.exports = {
  start: function() {
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            document.getElementById("demo").innerHTML = JSClock();
        }
    }
  }
};
