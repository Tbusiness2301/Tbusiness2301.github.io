 $(function(){
 	//hieu ung cuon chuot
 	new WOW().init();
 	// jquery cho phan hieu ung
 	$('ul.tdtab li b').click(function() {
 		/* Act on the event */
 		$('ul.tdtab li b').removeClass('active');
 		$(this).addClass('active');
 		chiso = $(this).parent().index() + 1;

 		$('ul.ndtab li .divsanpham').removeClass('xuathien');
 		$('ul.ndtab li:nth-child(' + chiso + ') .divsanpham').addClass('xuathien');

 	});


 	jQuery(document).ready(function($) {
        var $filter = $('.navbar');
        var $filterSpacer = $('<div />', {
            "class": "vnkings-spacer",
            "height": $filter.outerHeight()
        });
        if ($filter.size())
        {
            $(window).scroll(function ()
            {
                if (!$filter.hasClass('fix') && $(window).scrollTop() > $filter.offset().top)
                {
                    $filter.before($filterSpacer);
                    $filter.addClass("fix");
                }
                else if ($filter.hasClass('fix')  && $(window).scrollTop() < $filterSpacer.offset().top)
                {
                    $filter.removeClass("fix");
                    $filterSpacer.remove();
                }
            });
        }

    });

})  
 
