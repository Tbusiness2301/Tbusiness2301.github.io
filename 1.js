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

 	//hieu ung cho menu
 	Addservices = $('#InfoServices').offset().top;
 	$('.services').click(function() {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:Addservices},700);
 	});


 	AddCaseStudies = $('#casestudies').offset().top;
 	$('.casestudies').click(function() {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:AddCaseStudies},700);
 	});

 	AddNews = $('#News').offset().top;
 	$('.news').click(function() {
 		/* Act on the event */
 		$('body,html').animate({scrollTop:AddNews},700);
 	});
 	//hieu ung cuon chuot
 	new WOW().init();
})  
 
