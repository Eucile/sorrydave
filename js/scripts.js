$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();
    var numberInput = parseInt($("input#userNumber").val());

    var robotString = '';

    for (var i = 0; i < numberInput.length; i++) {
    
      if (numberInput % 3 === 0) {
        robotString += "I'm sorry, Dave, I can't do that.";
      } else if (numberInput === 1) {
        robotString += "Boop!";
      } else if (numberInput === 0) {
        robotString += "Beep!";
      }
    }

    $(".answer").text(robotString);
});
});
