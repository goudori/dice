$(function () {
  let ran = Math.floor(Math.random() * 6) + 1;
  $(".cImgSai").html("<img src='./img/" + ran + ".png'>");
});

const Mode_STOP = 0;

const Mode_STOP_NAME = "サイコロを振る";

const Mode_START = 1;

const Mode_START_NAME = "サイコロを止める";

let now_Mode = 0;
let roulette;

$(function () {
  $(".btnSai").click(function () {
    if (now_Mode == Mode_STOP) {
      roulette = setInterval(function () {
        let ran = Math.floor(Math.random() * 6) + 1;
        $(".cImgSai").html("<img src='./img/"+ran+".png'>");
      }, 300);

      $(".btnSai").html(Mode_START_NAME);
      now_Mode = Mode_START;
    } else {
      clearInterval(roulette);
      $(".btnSai").html(Mode_STOP_NAME);
      now_Mode = Mode_STOP;
    }
  });
});


