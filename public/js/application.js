// var turn_counter = 0

$(document).ready(function() {

  $("form").bind("click", function(evt) {
    evt.preventDefault();
    var that = this;
        var changeColor = function(data) {
            var column = $(this).find('input[value]')[1].value;
            var row_count = $(this).children()[2].value;
            cell = $('#'+ row_count + ' td:nth-child('+ column + ')')
            cell.css('background-image', turns());
            if (cell === cell.next() && cell.prev())

            if ($('#turn_counter').val() % 2 === 0){
              cell.attr("id", "player1")
            } else {
              cell.attr("id", "player2")
            };

            if (cell.attr("id") === cell.next().attr("id") && cell.next().next().attr("id") && cell.next().next().next().attr("id")){
              alert("Game Over")
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
