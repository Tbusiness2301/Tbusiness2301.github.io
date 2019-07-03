 $(function(){
 	vitricuaedu = $('#khoiedu').offset().top;
 	//console.log(vitricuaedu);

 	$(".xuong,.kn").click(function() {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:vitricuaedu},600)
 	});
 
})  
 