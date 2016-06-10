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
      listStack.push("<span class='all pingpong pingpong_toggle word'> pingpong </span>");
    } else if (i % 3 === 0) {
      listStack.push("<span class='all ping ping_toggle word'> ping </span>");
    } else if (i % 5 === 0) {
      listStack.push("<span class='all pong pong_toggle word'> pong </span>");
    } else {
      listStack.push("<span class='all number number_toggle'> " + i + " </span>");
    };
  };
  return listStack;
};
$(document).ready(function() {
  $("#ping").click(function() {
    $(".ping_toggle").toggleClass("ping");
  });
});
$(document).ready(function() {
  $("#pong").click(function() {
    $(".pong_toggle").toggleClass("pong");
  });
});
$(document).ready(function() {
  $("#pingpong").click(function() {
    $(".pingpong_toggle").toggleClass("pingpong");
  });
});
$(document).ready(function() {
  $("#number").click(function() {
    $(".number_toggle").toggleClass("number");
  });
});

$(document).ready(function() {
  $("form#ping_pong").submit(function(event) {
    event.preventDefault()
    var inputData = $("#userInput").val();
    var inputNumber = processInput(inputData);
    var finalOutput = processNumber(inputNumber);
    $("#content").removeClass("hidden");
    $("#content").html(finalOutput);
  });
});
