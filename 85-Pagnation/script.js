$(document).ready(function() {
  $('.next').click(function(){
    $('#rotate').toggleClass('rotated');
  });


});
  var cd = $("#cd"), degree = 0, timer;
  var player = document.getElementById("player");
    player.addEventListener("play", function () {
        rotate();

    });

  var player = document.getElementById("player");
    player.addEventListener("pause", function () {
      clearTimeout(timer);
    });

  function rotate() {
      cd.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
      cd.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});

      timer = setTimeout(function() {
          ++degree; rotate();
      },8);
  }
