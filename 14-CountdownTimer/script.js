var showDate = new Date("Aug 27, 2017 19:30:00").getTime();

var x = setInterval(function(){

  var rn = new Date().getTime();
  var distance = showDate - rn;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";

    if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "expired";
      }
  }, 1000);
