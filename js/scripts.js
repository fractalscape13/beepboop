$(document).ready(function() {
  $(".enterNum").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#numInput").val());
    $(".well").hide();
    $(".output").show();
    outputFunction(input);
  });
});

function outputFunction(input) {
  if (input.includes("3")? true : false) {
    $("#output3").show();
  } else if (input.includes(2)? true : false) {
    $("#output2").show();
  } else if (input.includes(1)? true : false) {
    $("#output1").show();
  } else {
    $("#outputNum").show();
  }
}
