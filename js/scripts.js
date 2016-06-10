var isNumber = true;

var processInput = function(input) {
  if (isNaN(parseInt(input)) === true) {
    isNumber = false;
    return;
  };
  var number = parseInt(input);
  return number;
};

var processNumber = function(number) {
  if (isNumber === false ) {
    isNumber = true;
    return "<span class='error word'> Thats not a number! </span>"
  }
  var listStack = []
  for (i = number; i > 0; i -= 1) {
    if (i % 3 === 0) {
      listStack.push("<li> PING! </li>");
    } else if (i % 5 === 0) {
      listStack.push("<li> PONG </li>");
    } else {
      listStack.push("<li> " + i +" </li>")
    };
  };
  return listStack;
};



$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault()
    var inputData = $("#userInput").val();
    var inputNumber = processInput(inputData);
    var finalOutput = processNumber(inputNumber);
    $(".output ul").html(finalOutput);
  });
});
