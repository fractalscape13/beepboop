//ui logic//

$(document).ready(function() {
  $(".enterNum").submit(function(event) {
    event.preventDefault();
    var input = $("input#numInput").val();
    $(".well").hide();
    $(".output").show();
    outputFunction(input);
  });
});

//business logic//

var integerArray = [];

function outputFunction(input) {
  if (input.includes('3')? true : false) {
    $("#output3").fadeToggle();
  } else if (input.includes('2')? true : false) {
    $("#output2").fadeToggle();
  } else if (input.includes('1')? true : false) {
    $("#output1").fadeToggle();
  } else if (input < 0) {
    $("#output4").fadeToggle();
  } else {
    for (var i = 0; i < parseInt(input); i++)
    integerArray = integerArray + i + ", ";
    $("#outputNum").text(integerArray + parseInt(input));

  }
}
