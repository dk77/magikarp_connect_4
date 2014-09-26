// var turn_counter = 0

$(document).ready(function() {

  $("form").bind("click", function(evt) {
    evt.preventDefault();
    var that = this;
        var changeColor = function(data) {
            var column = $(this).find('input[value]')[1].value;
            var row_count = $(this).children()[2].value;

          $('#'+ row_count + ' td:nth-child('+ column + ')').css('background-color', turns());
            var count = $('#turn_counter').val();
            if (count % 2 === 0){
              $('#'+ row_count + ' td:nth-child('+ column + ')').attr("id", "player1")
              debugger
            } else {
              $('#'+ row_count + ' td:nth-child('+ column + ')').attr("id", "player2")
              debugger
            };


            var row = $(this).children()[2].value;
            row-= 1;
            $(this).children()[2].value = row;

            if (row === 0){
              console.log(this)
              var button = $(this).children()[0].type = "hidden";

            }
          };

        var turns = function(){
          var count = $('#turn_counter').val();
              if (count % 2 === 0){
                count++;
                $('#turn_counter').val(count);
                return "url('http://i.imgur.com/naEcX6L.jpg')";
              } else  {
                count++;
                $('#turn_counter').val(count);
                return "url('http://i.imgur.com/CVYpbJ5.jpg')";
              }
        };
    $.ajax({
      url:'/',
      type: 'POST',
    }).done(changeColor.bind(that))
    .fail(function() {

    }).always(function(){
      $('#row-button').prop('disabled', false);
    })
  })
});
