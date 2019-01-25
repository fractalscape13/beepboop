$(document).ready(function() {
  $(".enterNum").submit(function(event) {
    event.preventDefault();
    $(".well").hide();
    $(".output").show();
  });
});
