const buttons = document.querySelectorAll(".btn");
// colors of simon game buttons
const colors = ["blue", "green", "yellow", "red"];
// wrong sound audio
var wrgAudio = new Audio("sounds/wrong.mp3");
var gamePattern = [];

const buttonEvents = () =>
  $(".btn").click(function () {
    var id = this.id; // get the id of clicked button
    if (id == gamePattern[gamePattern.length - 1] || gamePattern.length == 0) {
      var buttonAudio = new Audio("sounds/" + id + ".mp3");
      //when user clicks correct button or if during start,
      // make the correct sound, then continue the process.
      buttonAudio.play();
      var rcolor = randomColor();
      flashLight(rcolor);
      //add the rcolor to array
      gamePattern.push(rcolor);
      console.log(gamePattern);
    } else {
      wrgAudio.play();
      var scoreMessage = document.getElementById("score");
      scoreMessage.innerHTML = "Your Score: " + gamePattern.length * 10;
      console.log(
        "new start. you clicked: " +
          id +
          " instead of: " +
          gamePattern[gamePattern.length - 1]
      );
      gamePattern.length = 0; // empty the gamepattern
    }
  });

function flashLight(color) {
  $("#" + color)
    .fadeOut(400)
    .delay(500)
    .fadeIn(400);
}

//generate random numbers
function randomColor() {
  var rand = Math.floor(Math.random() * 4);
  var rcolor = colors[rand];
  return rcolor;
}

function mainLoop() {
  buttonEvents(); //listen click events now
}

//game loop
mainLoop();
