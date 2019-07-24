 $(function(){
 	// jquery cho phan hieu ung
 	$('ul.tdtab li b').click(function() {
 		/* Act on the event */
 		$('ul.tdtab li b').removeClass('active');
 		$(this).addClass('active');
 		chiso = $(this).parent().index() + 1;

 		$('ul.ndtab li .divsanpham').removeClass('xuathien');
 		$('ul.ndtab li:nth-child(' + chiso + ') .divsanpham').addClass('xuathien');

 	});

 	//hieu ung cuon chuot
 	new WOW().init();
})  
 
