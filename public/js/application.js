// var turn_counter = 0

$(document).ready(function() {

  $("form").bind("click", function(evt) {
    evt.preventDefault();
    var that = this;
    // console.log(this)
        var changeColor = function(data) {
            var column = $(this).find('input[value]')[1].value;
            var row_count = $("#row").val();
          $('#'+ row_count + ' td:nth-child('+ column + ')').css('background-color', turns())
          increaseRow()
        }

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
        var increaseRow = function(){
            var row = $('#row').val();
            row--;
            $('#row').val(row);
            if (row === 6){
              var button = $('column').val(hidden);
            }
          };


    //   console.log($('#turn_counter').val())
    // // console.log(turn_counter);
    var column = $(that).find('input[value]')[1].value
    var row_count = $("#row").val();
    var row_integer = parseInt(row_count)
    // console.log(column)
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
