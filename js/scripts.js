$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();
    var numberInput = parseInt($("input#userNumber").val());
    var robotString = '';
    var numArray = [];


    for (var i = 0; i < numberInput; i++) {

      numberIndex = numArray.push(numberInput[i]);

      if ((numberInput % 3 === 0) && (numberInput > 0)) {
        robotString += "I'm sorry, Dave, I can't do that.";
      } else if (numberInput === 1) {
        robotString += "Boop!";
      } else if (numberInput === 0) {
        robotString += "Beep!";
      } else {
        robotString += numberIndex;
      }
    }

$(".answer").text(robotString);
});
});
