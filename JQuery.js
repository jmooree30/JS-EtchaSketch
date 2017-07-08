var row=16;
var sizeofsquare=45;

function gridLife() {
  for (var x = 0; x < row; x++){
    for (var y = 0; y < row; y++){
  $("<div class='square'></div>").appendTo(".container");
}
}
 $('.square').css({'width': sizeofsquare, 'height': sizeofsquare});
}

$(document).ready(function(){
  gridLife();
 $('.square').on('mouseenter', function() {
        $(this).css('background-color', 'black');
      });
});

$(document).ready(function(){
$('.buttons').click(function(){
  $('.container').empty();
gridLife();
  row = prompt ('How many sqaures would you like?');
  sizeofsquare = 720/row;
$('.container').on('mouseenter', '.square', function () {
    $(this).css('background-color', 'black');

});
});
});







