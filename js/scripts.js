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
    return "<span class='all error word'> Thats not a number! </span>"
  };
  if (number > 100000) {
    return "<span class='all error word'> No. That number is too big. I won't. </span>"
  } else if (number > 50000) {
    alert("Fine, I'll do a really big number. It's gonna take a couple seconds though.")
  }
  var listStack = []
  for (i = number; i > 0; i -= 1) {
    if (i % 15 === 0) {
      listStack.push("<span class='all pingpong word'> PINGPONG </span>");
    } else if (i % 3 === 0) {
      listStack.push("<span class='all ping word'> PING </span>");
    } else if (i % 5 === 0) {
      listStack.push("<span class='all pong word'> PONG </span>");
    } else {
      listStack.push("<span class='all number'> " + i + " </span>");
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
    $("#content").removeClass("hidden");
    $(".output ul").html(finalOutput);
  });
});
