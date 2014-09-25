var players = 2;
var track = 40;
var table = '<table class="racer_table">';//.setAttribute("class", "racer_table")


for (var pl = 1; pl <= players ; pl++){
  table += '<tr id="player' + pl + '_strip">';
  for (var tr = 1; tr <= track ; tr++){
    if (tr === 1){
      table += '<td class="active">';//.setAttribute("class", "active") + "</td>";
    }else{
      table += "<td>" + "</td>";
    }
  }
}
document.getElementById("container").innerHTML = table;
