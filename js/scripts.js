$(document).ready(function() {
  $("button#switch-background").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#switch-text").click(function() {
    $("body").removeClass();
    $("body").addClass("pink-text");
  });
});