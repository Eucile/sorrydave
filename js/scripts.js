// Code to replace all numbers divisible by 3 with multi "I'm sorry Dave"'s as well as the range

// function getRobotString(numberInput) {
// var robotString = '';

// if (!Number.isInteger(parseInt(numberInput))) {
//   alert("Please enter a number, Dave.")
//   return "";
// }
// number = parseInt(numberInput)

// for (var i = numberInput - 1; i >= 0; i--) {
// if ((i % 3 === 0) && (i > 0)) {
//   robotString += "I'm sorry, Dave, I can't do that.";
// } else if (i.toString().includes('1')) {
//   robotString += "Boop!";
// } else if (i.toString().includes('0')) {
//   robotString += "Beep!";
// } else {
//   robotString += i + "," + " ";
//   }
// } return robotString
// }

// $(document).ready(function() {
//   $("#formOne").submit(function() {
//     event.preventDefault();
//     $(".well").fadeIn(2000);
//     $(".answer").text(getRobotString($("input#userNumber").val()));
//   });
// });

//The active code below replaces only 1's and 0s appearing in the range with beep boops, but only returns the single "Sorry Dave" when the inputted whole number is divisible by 3. Otherwise, it always returns the range, just with beeps and boops for 0's and 1's

function getRobotString(numberInput) {
var robotString = '';

if (!Number.isInteger(parseInt(numberInput))) {
  alert("Please enter a number, Dave.")
  return "";
}
var number = parseInt(numberInput)

if ((numberInput % 3 === 0) && (numberInput > 0)) {
  robotString += "I'm sorry, Dave, I can't do that.";
} else {
  for (var i = numberInput - 1; i >= 0; i--) {
    if (i.toString().includes('1')) {
      robotString += "Boop!";
    } else if (i.toString().includes('0')) {
      robotString += "Beep!";
    } else {
      robotString += i + "," + " ";
    }
  }
}
return robotString
}

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    $(".well").fadeIn(2000);
    $(".answer").text(getRobotString($("input#userNumber").val()));
  });
});
