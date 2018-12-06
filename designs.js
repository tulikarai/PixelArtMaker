// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
  $( "#sizePicker" ).submit(function( event ) {
    event.preventDefault();
    //alert( "Handler for .submit() called." );
    makeGrid();

    $('#pixelCanvas').on('click','tr td',function(){
      $(this).css('background-color',$('#colorPicker').val());
    });
  });
});

function makeGrid() {

// Your code goes here!

  //event.preventDefault();
  var row = $('#inputHeight').val();
  var col=$('#inputWeight').val();
  //alert("col : " + col);
  var table=$('#pixelCanvas');
  $('#pixelCanvas tr').remove();
  for(var i=0;i<row;i++)
  {
    var tr=$('<tr></tr>');
    table.append(tr);
    for(var j=0;j<col;++j)
    {
      tr.append('<td></td>');
    }
  }

}
