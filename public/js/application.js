// var turn_counter = 0

$(document).ready(function() {

  $("form").bind("click", function(evt) {
    evt.preventDefault();
    var that = this;
    // console.log(this)
        var changeColor = function(data) {
            var column = $(this).find('input[value]')[1].value;
            var row_count = $(this).children()[2].value;
          $('#'+ row_count + ' td:nth-child('+ column + ')').css('background-color', turns())

            var row = $(this).children()[2].value;
            row-= 1;
            $(this).children()[2].value = row;

            if (row === 0){
              // $(this).children()[0].type = disabled;
              console.log(this)
              var button = $(this).children()[0].type = "hidden";

            }
          };


        var turns = function(){
          var count = $('#turn_counter').val();
              if (count % 2 === 0){
                count++;
                $('#turn_counter').val(count);
                return 'red'
              } else  {
                count++;
                $('#turn_counter').val(count);
                return 'black'
              };
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
