var main = function(){
  $('form').submit(function(event){
    //var $input = $(event.target).find('input');
    //var comment = $input.val();
    if( $("#item").val() != ""){
        var html = $('<li>').html($("#item").val()+"<button type='submit' class='btn'>Delete</button>");
        var deltext = $('<button type="submit" class="btn">Delete</button>'); 
        
        html.appendTo('#items');
        $("#item").val("");       
    }
    return false;
  });
 $('ul').on('click','button',function(){
    $(this).closest('li').remove();
 });    
};
$(document).ready(main);