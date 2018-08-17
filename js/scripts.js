$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();
  $(".well").show();

  var numberInput = parseInt($("input#userNumber").val());
  var robotString = '';


    if ((numberInput % 3 === 0) && (numberInput > 0)) {
      robotString += "I'm sorry, Dave, I can't do that.";

      } else if (numberInput.toString().includes('1')) {
        robotString += "Boop!";
      } else if (numberInput.toString().includes('0')) {
        robotString += "Beep!";
      } else {
        for (var i = numberInput - 1; i >= 0; i--) {
          robotString += i;
        }
      }

  $(".answer").text(robotString);

  });
});
