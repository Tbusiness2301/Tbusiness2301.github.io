 $(function(){
 	vitricuaedu = $('#khoiedu').offset().top;
 	vitricuacmt = $('#khoicmt').offset().top;
 	//console.log(vitricuaedu);

 	$(".xuong,.kn").click(function() {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:vitricuaedu},600)
 	});
	
	 $(".cmt").click(function() {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:vitricuacmt},600)
 	});
})  
 