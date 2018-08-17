$(document).ready(function() {
  $("#formOne").submit(function() {
  event.preventDefault();
    var numberInput = parseInt($("input#userNumber").val());
    var robotString = '';
    var numArray = 0;



    if ((numberInput % 3 === 0) && (numberInput > 0)) {
      robotString += "I'm sorry, Dave, I can't do that.";

      } else if (numberInput.toString().includes('1')) {
        robotString += "Boop!";
      } else if (numberInput.toString().includes('0')) {
        robotString += "Beep!";
      } else {

        for (var i = 0; i <= numberInput; i++) {
          var numberIndex = numArray.push(numberInput[i]);
          numArray += numberIndex;
        }
      }

  // for (var i = 0; i < numberInput; i++) {
  //     numberIndex = numberInput[i]);
  //
  //     if ((numberInput % 3 === 0) && (numberInput > 0)) {
  //       robotString += "I'm sorry, Dave, I can't do that.";
  //     } else if (numberIndex === 1) {
  //       robotString += "Boop!";
  //     } else if (numberIndex === 0) {
  //       robotString += "Beep!";
  //     }
  //     // } else {
  //     //   robotString += numberIndex;
  //     // }
  //  }

$(".answer").text(robotString);
});
});
