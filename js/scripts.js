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
    return false;
  } else {
    return number;
  };
};
var crunchDigits = function(number) {
  var listStack = []
  for (i = number; i >= 0; i -= 1) {
    if (i % 15 === 0) {
      listStack.push(15);
    } else if (i % 3 === 0) {
      listStack.push(3);
    } else if (i % 5 === 0) {
      listStack.push(5);
    } else {
      listStack.push(i);
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
  $("#normalcy_mode").click(function() {
    $("body, div, button, .main_header, .page-header").toggleClass("insanity_mode");
  });
});
$(document).ready(function() {
  $("#insanity_mode").click(function() {
    $("body, div, button, .main_header, .page-header").addClass("insanity_mode");
  });
});
$(document).ready(function() {
  $("form#ping_pong").submit(function(event) {
    event.preventDefault();
    var inputData = $("#userInput").val();
    var inputNumber = processInput(inputData);
    var evaluatedNumber = processNumber(inputNumber);
    if (evaluatedNumber === false ) {
      finalOutput =  "<span class='all error word'> No. Not a number. </span>";
    } else if (evaluatedNumber > 10000) {
      finalOutput =  "<span class='all error word'> No. That number is too big. I won't. </span>";
    } else if (evaluatedNumber > 5000) {
      alert("Fine, I'll do a really big number. It's gonna take a couple seconds though.");
      digits = crunchDigits(evaluatedNumber);
    } else if (evaluatedNumber <= 5000) {
      digits = crunchDigits(evaluatedNumber);
      var listFinal = [];
      for (i = 1; i <= digits.length; i += 1) {
        if ( digits[i] === 3 ) {
          listFinal.push("<span class='all ping ping_toggle word'> ping </span>");
        } else if ( digits[i] === 5 ) {
          listFinal.push("<span class='all pong pong_toggle word'> pong </span>");
        } else if ( digits[i]  === 15 ) {
          listFinal.push("<span class='all pingpong pingpong_toggle word'> pingpong </span>");
        } else {
          listFinal.push("<span class='all number number_toggle'> " + i + " </span>");
        };
      };
      alert(digits[0]);
      alert(listFinal[0]);
    };
    $("#content").removeClass("hidden");
    $("#content").html(listFinal);
  });
});
