var height, 
    width, 
    color;

$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(width, height);
  // console.log('height' + height + ' and width: ' + width);
})

function makeGrid(x, y) {
  $('tr').remove();
  
  for (var i = 0; i < y; i++) {
    $('#pixelCanvas').append('<tr id="row' + i + '"></tr>');
    for (var k = 0; k < x; k++) {
      $('#row' + i).append('<td></td>');
    }
  }
  
  $('td').click(function addColor() {
    color = $('#colorPicker').val();
    
    if ($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
  
}