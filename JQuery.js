var row=16;
var sizeofsquare=45;

function gridLife() {
  for (var x = 0; x < row; x++){
    for (var y = 0; y < row; y++){
  $("<div class='square'></div>").appendTo(".container");
}
}
}

$(document).ready(function(){
  gridLife();
 $('.square').on('mouseenter', function() {
        $(this).css('background-color', 'black');
      });
});


