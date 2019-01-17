$(document).ready(function(){

	$('.btn').hover(fadeIn, fadeOut);

});

function fadeIn(){
			$(this).addClass('active');
};


function fadeOut(){
			$(this).removeClass('active');
};