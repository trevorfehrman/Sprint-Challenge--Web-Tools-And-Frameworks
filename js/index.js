$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

var offset = 80;

$(".navbar li a").click(function(event) {
  event.preventDefault();
  $($(this).attr("href"))[0].scrollIntoView();
  scrollBy(0, -offset);
});

$("#collapseOne").collapse("toggle");
