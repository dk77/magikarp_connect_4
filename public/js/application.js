// var turn_counter = 0

$(document).ready(function() {
  $("form").bind("click", function(evt) {
    evt.preventDefault();
    var that = this;
    // console.log(this)
    // var turns = function(){
    //   var count = $('#turn_counter').val();
    //   if (count % 2 === 0){
    //     return 'red'
    //   } else  {
    //     return 'black'
    //   };
    //   count++;
    //   $('#turn_counter').val(count)
    //   var row_count = function(){
    //     var row = $('#row_count').val();
    //     row++;
    //     if (row === 6){
    //       var button = $('column').val(hidden)
    //     }
    //   };
    // };
    //   console.log($('#turn_counter').val())
    // // console.log(turn_counter);
    var column = $(that).find('input[value]')[1].value
    console.log(column)
    $.ajax({
      url:'/',
      type: 'POST',
    }).done(function(data) {
      $('#1 td:nth-child('+ column + ')').css('background-color', 'black')
    })
    .fail(function() {

    }).always(function(){
      $('#row-button').prop('disabled', false);
    })
  })
});
