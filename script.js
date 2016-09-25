$(document).ready(function(){

	$('.addButton').click(function(){
			var toAdd = $('input[name=item]').val();
			if(toAdd){
				$('.leftdiv').append("<div class='productdiv'><div class='declineButton'>x</div><div class='boughtButton'>Куплено</div><div class='plusButton'>+</div><div id='NUM'>1</div><div class='minusButton'>-</div><div class='product'>"+toAdd+"</div></div>");
			}
	});

	$('.messages').click(function(){
			$(this).addClass('changeBorderColor');
	});

	$(document).click(function (event) {
		if (!$(event.target).hasClass('changeBorderColor')){ 
			$('.messages').removeClass('changeBorderColor');
		} 
	});

});


