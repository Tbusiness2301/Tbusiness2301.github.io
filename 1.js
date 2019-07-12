 $(function(){
 	$(window).scroll(function() {
 		/* Act on the event */
 		 if( $(".body").scrollTop()>100) {
 		$(".logo").addClass('chucam');
 		 }

 		// else{
 		// 	$(".logo").removeClass('chucam');
 		// }
 	});

 	$('.buttonup').click(function() {
 		/* Act on the event */
 		$('.body').animate({'scrollTop':0});
 		return false;
 	});
})  
 
