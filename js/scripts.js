$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#manatee-showing").fadeToggle();
    $("#manatee-hidden").fadeToggle();
  });
});
